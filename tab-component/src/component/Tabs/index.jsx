import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import * as S from './styles';

const Tabs = ({ children, initialActiveTab, lazyLoadTabs }) => {

  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabClick = useCallback((tabIndex, disabled) => {
    if (!disabled) {
      setActiveTab(tabIndex);
    }
  }, []);

  const renderTabs = useCallback((tabsChildren) => {
    return React.Children.map(tabsChildren, (tab, index) => {
      const { title, disabled } = tab.props;
      return (
        <S.TabsHeaderItem
          onClick={() => handleTabClick(index, disabled)}
          active={index === activeTab}
          disabled={disabled}
        >
          {title}
        </S.TabsHeaderItem>
      )
    });
  }, [activeTab, handleTabClick]);

  const renderTabsContent = useCallback((tabsChildren) => {
    if (lazyLoadTabs) {
      //Renderiza somente o conteúdo da aba corrente no carregamento do componente
      return React.Children.toArray(tabsChildren)
        .filter((_, index) => index === activeTab)
        .map(tab => React.cloneElement(tab, { show: true }))
    } else {
      // Renderiza todas as abas no carregamento do componente
      return React.Children.map(tabsChildren, (tab, index) => {
        return React.cloneElement(tab, { show: index === activeTab });
      })
    }

  }, [activeTab, lazyLoadTabs]);

  return (
    <S.TabsContainer>
      <S.TabsHeaderContainer>
        {renderTabs(children)}
      </S.TabsHeaderContainer>
      <S.TabsContentContainer>
        {renderTabsContent(children)}
      </S.TabsContentContainer>
    </S.TabsContainer>
  )
}

Tabs.defaultProps = {
  initialActiveTab: 0,
  lazyLoadTabs: true,
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  initialActiveTab: PropTypes.number,
  lazyLoadTabs: PropTypes.bool,
}

export default Tabs;

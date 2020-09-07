import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import * as S from './styles';

const Tabs = ({
  children, initialActiveTab, lazyLoadTabs, overlappingTabs,
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabClick = useCallback((tabIndex, disabled) => {
    if (!disabled) {
      setActiveTab(tabIndex);
    }
  }, []);

  const renderTabs = useCallback((tabsChildren) => React.Children.map(tabsChildren, (tab, index) => {
    const { title, disabled } = tab.props;
    const active = index === activeTab;

    return (
      <S.TabsHeaderItem
        onClick={() => handleTabClick(index, disabled)}
        active={active}
        disabled={disabled}
        overlappingTabs={overlappingTabs}
      >
        <S.TabHeaderItemContent
          overlappingTabs={overlappingTabs}
          disabled={disabled}
          active={active}
        >
          <div>{title}</div>
        </S.TabHeaderItemContent>
      </S.TabsHeaderItem>
    );
  }), [activeTab, handleTabClick, overlappingTabs]);

  const renderTabsContent = useCallback((tabsChildren) => {
    if (lazyLoadTabs) {
      // Renderiza somente o conteúdo da aba corrente no carregamento do componente
      return React.Children.toArray(tabsChildren)
        .filter((_, index) => index === activeTab)
        .map((tab) => React.cloneElement(tab, { show: true }));
    }
    // Renderiza todas as abas no carregamento do componente
    return React.Children.map(tabsChildren, (tab, index) => React.cloneElement(
      tab, { show: index === activeTab },
    ));
  }, [activeTab, lazyLoadTabs]);

  return (
    <S.TabsContainer>
      <S.TabsHeaderContainer>
        {renderTabs(children)}
      </S.TabsHeaderContainer>
      <S.TabsContentContainer overlappingTabs={overlappingTabs}>
        {renderTabsContent(children)}
      </S.TabsContentContainer>
    </S.TabsContainer>
  );
};

Tabs.defaultProps = {
  initialActiveTab: 0,
  lazyLoadTabs: true,
  overlappingTabs: false,
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  initialActiveTab: PropTypes.number,
  lazyLoadTabs: PropTypes.bool,
  overlappingTabs: PropTypes.bool,
};

export default Tabs;

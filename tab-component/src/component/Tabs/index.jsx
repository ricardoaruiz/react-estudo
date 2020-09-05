import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types';

import * as S from './styles';

const Tabs = ({ children, initialActiveTab }) => {

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
    return React.Children.map(tabsChildren, (tab, index) => {
      return React.cloneElement(tab, { show: index === activeTab });
    })
  }, [activeTab]);

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
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  initialActiveTab: PropTypes.number
}

export default Tabs;

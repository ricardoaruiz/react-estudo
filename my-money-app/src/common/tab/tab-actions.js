export const TAB_ACTIONS = {
    TAB_SELECTED: 'TAB_SELECTED',
    TAB_SHOWED: 'TAB_SHOWED'
}

export const selectTab = (tabId) => ({
        type: TAB_ACTIONS.TAB_SELECTED,
        payload: tabId
});

export const showTabs = (...tabIds) => {
    const tabsToShow = {};
    tabIds.forEach(tabId => tabsToShow[tabId] = true);
    return {
        type: TAB_ACTIONS.TAB_SHOWED,
        payload: tabsToShow
    }
}
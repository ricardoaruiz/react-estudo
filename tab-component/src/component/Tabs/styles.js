import styled, { css } from 'styled-components';

const normalColor = '#7a7a7a';
const activeColor = '#0f0f0f';
const disabledColor = '#E2DFDF';
const normalBorder = `1px solid ${normalColor}`;
const activeBorder = `2px solid ${activeColor}`;

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabsHeaderContainer = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  list-style: none;
`;

export const TabsHeaderItem = styled.li`
  position: relative;
  width: 100%;
  min-width: 8rem;
  text-align: center;
  transition: all 0.1s;

  ${(props) => css`
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    color: ${props.disabled ? disabledColor : normalColor};
  `}

  ${(props) => (!props.overlappingTabs
    ? css`
        border-bottom: ${props.active ? activeBorder : normalBorder};

        & + li {
          margin-left: .5rem;
        }`
    : css`
        &::before {
          position: absolute;
          content: '';
          bottom: -1px;
          left: 0;
          width: 0.5rem;
          border-bottom: ${normalBorder};
        }
        &::after {
          position: absolute;
          content: '';
          bottom: -1px;
          right: 0;
          width: 0.5rem;
          border-bottom: ${normalBorder};
        }
        &:first-child::before {
          border-bottom: unset;
        }
        &:last-child::after {
          border-bottom: unset;
        }
    `)}
`;

export const TabHeaderItemContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  height: 98%;

  color: ${(props) => {
    if (props.disabled) {
      return disabledColor;
    }
    return props.active ? activeColor : normalColor;
  }};

  ${(props) => props.overlappingTabs
    && css`
    border: ${normalBorder};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `}

  ${(props) => props.active && css`
    border-bottom: unset;
  `}

  & div {
    min-height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const TabsContentContainer = styled.div`
  padding: 1rem;

  ${(props) => props.overlappingTabs && css`
    margin: 0 0.5rem;
    border: ${normalBorder};
    border-top: none;
  `}
`;

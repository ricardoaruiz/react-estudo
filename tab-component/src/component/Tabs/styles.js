import styled, { css } from 'styled-components';

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
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  text-align: center;
  transition: all 0.1s;

    ${(props) => (props.overlappingTabs
    ? css`
        ${props.active ? css`
            &::before {
              position: absolute;
              content: '';
              bottom: 0px;
              left: 0;
              width: 0.5rem;
              border-bottom: 1px solid #0f0f0f;
            }
            &::after {
              position: absolute;
              content: '';
              bottom: 0;
              right: 0;
              width: 0.5rem;
              border-bottom: 1px solid #0f0f0f;
            }
          ` : css`
            border-bottom: 1px solid #0f0f0f;
            color: '#0f0f0f';
          `}
      `
    : css`
          border-bottom: ${props.active ? '2px solid #0f0f0f' : '1px solid #7a7a7a'};
          color: ${props.active ? '#0f0f0f' : '#7a7a7a'};

          & + li {
            margin-left: .5rem;
          }
      `)}
`;

export const TabHeaderItemContent = styled.div`
  /* padding: 1rem 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  height: 98%;
  ${(props) => props.overlappingTabs
    && css`
    border: 1px solid #7a7a7a;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
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
`;

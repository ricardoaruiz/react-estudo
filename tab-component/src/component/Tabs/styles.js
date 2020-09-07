import styled from 'styled-components';

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
  width: 100%;
  min-width: 8rem;
  padding: 0.5rem 1rem;
  border-bottom: ${(props) => (props.active ? '2px solid #0f0f0f' : '1px solid #7a7a7a')};
  color: ${(props) => (props.active ? '#0f0f0f' : '#7a7a7a')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  text-align: center;
  transition: all 0.1s;

  & + li {
    margin-left: .5rem;
  }
`;

export const TabsContentContainer = styled.div`
  padding: 1rem;
`;

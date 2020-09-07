import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TabContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  animation: ${fade} 0.5s;
`;

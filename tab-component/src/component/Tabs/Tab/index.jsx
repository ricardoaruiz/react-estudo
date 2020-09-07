import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Tab = (props) => {
  const { children, show } = props;
  return (
    <S.TabContainer show={show}>
      {children}
    </S.TabContainer>
  );
};

Tab.defaultProps = {
  show: false,
};

Tab.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool,
};

export default Tab;

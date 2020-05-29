import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style.module.scss';

const Card = (props) => {
  const {
    children, title, red, green, blue, purple,
  } = props;

  const colors = classnames(
    red ? style.red : '',
    green ? style.green : '',
    blue ? style.blue : '',
    purple ? style.purple : '',
  );

  return (
    <div className={style.card}>
      <div className={style.header}>
        <span className={classnames(style.title, colors)}>{title}</span>
      </div>
      <div className={classnames(style.content, colors)}>
        { children }
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: '',
  red: false,
  green: false,
  blue: false,
  purple: false,
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  title: PropTypes.string,
  red: PropTypes.bool,
  green: PropTypes.bool,
  blue: PropTypes.bool,
  purple: PropTypes.bool,
};

export default Card;

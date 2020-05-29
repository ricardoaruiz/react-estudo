import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';
import style from './style.module.scss';

const Average = (props) => {
  const { numbers } = props;
  const average = (numbers.min + numbers.max) / 2;

  return (
    <Card title="Média" green>
      <div className={style.sum}>
        <span>Resultado:</span>
        <strong>{average}</strong>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  numbers: state.numbers,
});

Average.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps)(Average);

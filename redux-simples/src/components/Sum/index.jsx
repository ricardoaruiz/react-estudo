import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';
import style from './style.module.scss';

const Sum = (props) => {
  const { numbers } = props;
  const sum = numbers.min + numbers.max;

  return (
    <Card title="Somatória" blue>
      <div className={style.sum}>
        <span>Resultado:</span>
        <strong>{sum}</strong>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  numbers: state.numbers,
});

Sum.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps)(Sum);

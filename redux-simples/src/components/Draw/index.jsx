import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';
import style from './style.module.scss';

const Draw = (props) => {
  const { numbers } = props;
  const draw = parseInt(
    Math.random() * (+numbers.max - +numbers.min) + +numbers.min,
    10,
  );
  return (
    <Card title="Sorteio" purple>
      <div className={style.draw}>
        <span>Resultado:</span>
        <strong>{draw}</strong>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  numbers: state.numbers,
});

Draw.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps)(Draw);

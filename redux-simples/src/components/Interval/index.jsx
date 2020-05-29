import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeMax, changeMin } from '../../store/actions/numbers';
import Card from '../Card';
import style from './style.module.scss';

const Interval = (props) => {
  const { numbers, changeMinNumber, changeMaxNumber } = props;

  return (
    <Card title="Intervalo de números" red>
      <div className={style.intervalo}>
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            name="min"
            value={numbers.min}
            onChange={(e) => changeMinNumber(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            name="max"
            value={numbers.max}
            onChange={(e) => changeMaxNumber(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  numbers: state.numbers,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeMinNumber: changeMin,
  changeMaxNumber: changeMax,
}, dispatch);

Interval.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
  changeMinNumber: PropTypes.func.isRequired,
  changeMaxNumber: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Interval);

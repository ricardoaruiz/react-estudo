import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement, stepChanged } from './counterActions';

const Counter = props => 
    <div>
        <h1>{props.value}</h1>
        <label htmlFor="step">Step:</label>
        <input type="number" id="step" value={props.step} onChange={props.stepChanged}></input>
        <br/>
        <button onClick={props.increment}>Incremetar</button>
        <button onClick={props.decrement}>Decrementar</button>
    </div>

const mapStateToProps = state => ({ ...state.counter })

const mapDispatchToProps = dispatch => (
    bindActionCreators({increment, decrement, stepChanged}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
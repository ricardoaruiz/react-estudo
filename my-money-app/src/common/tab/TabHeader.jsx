import './TabHeader.scss';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import If from '../operators/If/If';
import { selectTab } from './tab-actions';

const TabHeader = props => {

    const selected = props.tab.selected === props.target;
    const visible = props.tab.visible[props.target];

    return (
        <If test={visible}>
            <li className={selected ? 'active' : ''}>
                <a 
                    href=' ' 
                    data-toggle="tab"
                    data-target={props.target}
                    onClick={() => props.selectTab(props.target)}
                >
                    <i className={`fa fa-${props.icon}`}></i>
                    {props.label}
                </a>
            </li>
        </If>
    );
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(TabHeader);
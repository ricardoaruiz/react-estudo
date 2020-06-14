import React from 'react'
import classnames from 'classnames';
import style from './style.module.scss';

const Steps = () => {
  return (
    <div className={style['step-component']}>
      <div className={classnames(style.step, style.completed)}>10</div>
      <div className={classnames(style.path, style.completed)}></div>
      <div className={classnames(style.step, style.completed)}></div>
      <div className={style.path}></div>
      <div className={style.step}></div>
      <div className={style.path}></div>
      <div className={style.step}></div>
    </div>
  )
}

export default Steps;


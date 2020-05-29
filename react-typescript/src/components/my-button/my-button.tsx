import classnames from 'classnames';
import React from 'react';

import styles from './my-button.module.scss';

interface MyButtonPrpos extends React.AriaAttributes {
  label?: string,
  type?: 'button' | 'submit' | 'reset',
  category?: string,
  disable?: boolean
  children?: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const MyButtonType = {
  PRIMARY: 'PRIMARY',
  SUCCESS: 'SUCCESS',
  DANGER: 'DANGER',
  WARN: 'WARN',
};

export const MyButton: React.SFC<MyButtonPrpos> = ({
  label,
  type = 'button',
  category = MyButtonType.PRIMARY,
  disable = false,
  children,
  onClick,
}: MyButtonPrpos) => {

  const classes = classnames(
    styles['my-button'],
    category === MyButtonType.PRIMARY ? styles.primary : '',
    category === MyButtonType.SUCCESS ? styles.success : '',
    category === MyButtonType.DANGER ? styles.danger : '',
    category === MyButtonType.WARN ? styles.warn : '',
  );

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disable}
    >
      {children || label}
    </button>
  );
};

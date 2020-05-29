import React, { useCallback } from 'react'
import classnames from 'classnames';
import styles from './my-button.module.scss';

interface MyButtonPrpos extends React.AriaAttributes {
    label?: string,
    type?: string,
    disable?: boolean
    children?: React.ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>
};

export const MyButtonType = {
    PRIMARY: 'PRIMARY',
    SUCCESS: 'SUCCESS',
    DANGER: 'DANGER',
    WARN: 'WARN'
};

export const MyButton: React.SFC<MyButtonPrpos> = ({
    label,
    type = MyButtonType.PRIMARY,
    disable = false,
    children,
    onClick
}) => {

  const btnClasses = useCallback(
    () => {
      return classnames(
        styles['my-button'],
        type === MyButtonType.PRIMARY ? styles.primary : '',
        type === MyButtonType.SUCCESS ? styles.success : '',
        type === MyButtonType.DANGER ? styles.danger : '',
        type === MyButtonType.WARN ? styles.warn : '',
      );
    },
    [type]
  );

  return (
      <button 
          className={btnClasses()} 
          onClick={onClick}
          disabled={disable}
      >
          {children || label}
      </button>
  )    
};

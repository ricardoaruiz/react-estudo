import React from 'react'
import classnames from 'classnames';

import './Toggle.scss'

interface ToggleProps {
  state: boolean,
  onToggle: (state: boolean) => void
}

const Toggle = ({
  state,
  onToggle
}: ToggleProps) => {

  const classes = classnames({
    'toggle-component': true,
    'on': state
  });

  const handleToggleChange = () => {
    onToggle(!state);
  }

  return (
    <div className={classes} onClick={handleToggleChange}>
      <div className='toggle-selector'></div>
    </div>
  )
}

export default Toggle;

import React from 'react';
import Button from './Button';

import './Button.stories.scss';

export default {
  title: 'Button',
};

const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  alert('Button clicked');
}

export const Simple = () => (
  <div className="button-container">
    <Button label="Default" onClick={handleButtonClick} />
    <Button onClick={handleButtonClick} >Default</Button>
    <Button label="Primary" primary onClick={handleButtonClick} />
    <Button label="Success" success onClick={handleButtonClick} />
    <Button label="Error" error onClick={handleButtonClick} />
    <Button label="Warn" warn onClick={handleButtonClick} />
    <Button label="Disabled" primary disabled onClick={handleButtonClick} />
  </div>
);

export const Block = () => (
  <div className="button-container">
    <Button label="Default" block  onClick={handleButtonClick} />
    <Button block onClick={handleButtonClick} >Default</Button>
    <Button label="Primary" primary block  onClick={handleButtonClick} />
    <Button label="Success" success block  onClick={handleButtonClick} />
    <Button label="Error" error block  onClick={handleButtonClick} />
    <Button label="Warn" warn block  onClick={handleButtonClick} />
    <Button label="Disabled" primary disabled block  onClick={handleButtonClick} />
  </div>
);

export const CustomClass = () => (
  <div className="button-container">
    <Button label="Primary" customClass="custom-class1 custom-class2" onClick={handleButtonClick} />
  </div>
);

export const CustomStyle = () => (
  <div className="button-container">
    <Button label="Default" onClick={handleButtonClick} style={{ width: '150px' }} />
    <Button onClick={handleButtonClick} style={{ border: '1px solid red' }} >Default</Button>
    <Button label="Primary" primary style={{ color: 'red' }} onClick={handleButtonClick} />
  </div>
);

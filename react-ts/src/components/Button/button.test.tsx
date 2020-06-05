import React from 'react';
import style from './style.module.scss';
import { render, fireEvent } from '@testing-library/react';

import Button from './index';

const clickHandle = jest.fn();
const defaultProps = {
  onClick: clickHandle,
}

describe('Button SCSS Module', () => {
  test('button should be created', () => {
    const { getByRole } = render(<Button { ...defaultProps } type="submit" />);
    const btn = getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('type','submit');
  });

  test('button should be created with provided label', () => {
    const { getByRole, debug } = render(<Button { ...defaultProps } label="click me" />);
    expect(getByRole('button')).toContainHTML("click me");
  });

  test('button should be created with child', () => {
    const { getByRole, debug } = render(<Button { ...defaultProps } >click me</Button>);
    expect(getByRole('button')).toContainHTML("click me");
  });  

  test('Button click fired', () => {
    const { getByRole } = render(<Button { ...defaultProps } />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(clickHandle).toHaveBeenCalledTimes(1);
  });

  test('Button should has primary style when primary property has been provided', () => {
    const { container } = render(<Button { ...defaultProps } primary />);
    expect(container.querySelector(`.${style.primary}`)).toBeInTheDocument();
  });

  test('Button should has success style when success property has been provided', () => {
    const { container } = render(<Button { ...defaultProps} success/>);
    expect(container.querySelector(`.${style.success}`)).toBeInTheDocument();
  });

  test('Button should has error style when error property has been provided', () => {
    const { getByRole } = render(<Button { ...defaultProps} error/>);
    expect(getByRole('button')).toHaveClass(style.error);
  });

  test('Button should has warn style when warn property has been provided', () => {
    const { getByRole } = render(<Button { ...defaultProps} warn/>);
    expect(getByRole('button')).toHaveClass(style.warn);
  });

  test('Button should disabled when disabled property is true', () => {
    const { getByRole } = render(<Button { ...defaultProps} primary disabled/>);
    expect(getByRole('button')).toHaveAttribute('disabled');
  });

});


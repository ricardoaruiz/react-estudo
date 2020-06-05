import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './index';

const handleClick = jest.fn();
const defaultProps = {
  onClick: handleClick,
}

describe('Button Styled', () => {
  test('Button should be created', () => {
    const { getByRole } = render(<Button { ...defaultProps } />);
    const btn = getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('Button should show with label when label property provided', () => {
    const { getByRole } = render(<Button { ...defaultProps } label="click me"/>);
    const btn = getByRole('button');
    expect(btn).toContainHTML('click me');
  });

  test('Button should show with label when child provided', () => {
    const { getByRole } = render(<Button { ...defaultProps } >click me</Button>);
    const btn = getByRole('button');
    expect(btn).toContainHTML('click me');
  });

  test('Button click fired', () => {
    const { getByRole } = render(<Button { ...defaultProps } >click me</Button>);
    const btn = getByRole('button');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Button should has primary style when primary property has been provided', () => {
    const { getByRole, debug } = render(<Button { ...defaultProps } primary />);
    const btn = getByRole('button');
    expect(btn).toHaveStyle('background: #0099ff');
  });

  test('Button should has success style when success property has been provided', () => {
    const { getByRole, debug } = render(<Button { ...defaultProps } success />);
    const btn = getByRole('button');
    expect(btn).toHaveStyle('background: #008000');
  });

  test('Button should has error style when error property has been provided', () => {
    const { getByRole, debug } = render(<Button { ...defaultProps } error />);
    const btn = getByRole('button');
    expect(btn).toHaveStyle('background: #ff0000');
  });

  test('Button should has warn style when warn property has been provided', () => {
    const { getByRole, debug } = render(<Button { ...defaultProps } warn />);
    const btn = getByRole('button');
    expect(btn).toHaveStyle('background: #ffa500');
  });

  test('Button should disabled when disabled property is true', () => {
    const { getByRole } = render(<Button { ...defaultProps} primary disabled/>);
    expect(getByRole('button')).toHaveAttribute('disabled');
  });
});

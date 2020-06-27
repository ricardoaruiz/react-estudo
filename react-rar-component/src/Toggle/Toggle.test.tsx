import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Toggle from './Toggle';

const mockedOnToggle = jest.fn();

const initialProps = {
  state: false,
  onToggle: mockedOnToggle
};

beforeEach(() => {
  mockedOnToggle.mockClear();
});

describe('Toggle component', () => {
  it('should render', () => {
    const { container } = render(<Toggle {...initialProps} />);
    expect(container.querySelector('.toggle-component')).toBeInTheDocument();
  });
  it('should render toggle off', () => {
    const { container } = render(<Toggle {...initialProps} />);
    expect(container.querySelector('.toggle-component.on')).not.toBeInTheDocument();
  });
  it('should render toggle on', () => {
    const { container } = render(<Toggle {...initialProps} state={true} />);
    expect(container.querySelector('.toggle-component.on')).toBeInTheDocument();
  });
  it('should call callback function with true when change toggle from false to true', () => {
    const { container } = render(<Toggle {...initialProps} />);
    const component = container.querySelector('.toggle-component');
    if (!component) {
      expect(true).toBe(false);
      return;
    }
    fireEvent.click(component);
    expect(mockedOnToggle).toHaveBeenCalledWith(true);
  });
  it('should call callback function with false when change toggle from true to false', () => {
    const { container } = render(<Toggle {...initialProps} state={true} />);
    const component = container.querySelector('.toggle-component');
    if (!component) {
      expect(true).toBe(false);
      return;
    }
    fireEvent.click(component);
    expect(mockedOnToggle).toHaveBeenCalledWith(false);
  });
});
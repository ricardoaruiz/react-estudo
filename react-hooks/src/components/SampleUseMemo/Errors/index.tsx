import React from 'react';

const rules = [
  '8 characteres',
  'lowercase word',
  'uppdarcase word',
];

interface ErrorsProps {
  active?: boolean;
}

const Errors: React.FunctionComponent<ErrorsProps> = ({ active }: ErrorsProps) => (
  !active ? null : (
    <ul>
      {rules.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  ));

export default Errors;

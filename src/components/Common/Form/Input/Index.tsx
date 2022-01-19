/* eslint-disable react/function-component-definition */
import * as React from 'react';
import { FC } from 'react';
import { InputContainer, InputLable } from './styled';
import { Props } from './types';

const Input: FC<Props> = ({
  name,
  type,
  placeholder,
  onChange,
  required,
  value,
  label,
}) => {
  const handleChange = (e: any) => {
    onChange(e);
  };

  return (
    <InputContainer>
      <InputLable>{label}</InputLable>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder || ' '}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default Input;

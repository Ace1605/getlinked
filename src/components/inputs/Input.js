import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";

const FormInput = styled.input`
  display: block;
  border-radius: 0.2rem;
  padding: 1.3em 1em;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #fff;
  font-weight: 400;
  background-color: transparent;
  color: #fff;

  ::placeholder {
    color: #fff !important;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 360px) {
    padding: 1.3em 1em 1.3em 1em;
  }
`;

function Input({
  placeholder,
  onChange,
  type,
  required,
  name,
  disabled,
  style,
}) {
  return (
    <FormInput
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      required={required}
      name={name}
      disabled={disabled}
      style={style}
    />
  );
}

export default Input;

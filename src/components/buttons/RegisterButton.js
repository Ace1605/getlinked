import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";
import AppLoader from "../loader/AppLoader";

const Button = styled.button`
  background: transparent;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, #ff26b9, #903aff) 5;
  border-radius: 1.75rem;
  height: 3rem;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    border-width: 0px;
    border-style: none;
    border-image: none;
    background: linear-gradient(45deg, #ff26b9, #903aff) !important;
    border-radius: 0.2rem;
  }
`;

function RegisterButton({ children, onClick, isloading, width, bg, color }) {
  return (
    <Button
      onClick={onClick}
      style={{
        width: width,
        background: bg,
        color: color,
      }}
    >
      {isloading ? <AppLoader /> : children}
    </Button>
  );
}

export default RegisterButton;

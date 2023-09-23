import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";
import AppLoader from "../loader/AppLoader";

const Button = styled.button`
  outline: none;
  border: none;
  height: 3rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    background: transparent !important;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to right, #ff26b9, #903aff) 5;
    border-radius: 1.75rem;
  }
`;

function CustomButton({ children, onClick, isloading, width, bg, color }) {
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

export default CustomButton;

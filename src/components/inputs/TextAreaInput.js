import React from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";

const Wrapper = styled.div`
  position: relative;
`;

const TextArea = styled.textarea`
  display: block;
  width: -webkit-fill-available;
  height: 8rem;
  padding: 1.3em 1rem;
  border-radius: 0.2rem;
  border: 1px solid ${AppColors.WHITE};
  outline: none;
  background-color: transparent;
  color: #fff;

  &:focus {
    border-width: 1px;
    border-image: linear-gradient(45deg, #ff26b9, #903aff);
    border-image-slice: 1; /* Ensures the entire border is filled with the gradient */
    border-image-source: initial; /* Resets the border image source */
    border-style: solid; /* Specifies the border style */
    --tw-ring-color: linear-gradient(45deg, #ff26b9, #903aff);
  }
`;

function TextAreaInput({ placeholder, onChange, value }) {
  return (
    <Wrapper>
      <TextArea placeholder={placeholder} onChange={onChange}>
        {value}
      </TextArea>
    </Wrapper>
  );
}

export default TextAreaInput;

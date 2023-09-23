import React, { useState } from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";
import CustomButton from "../buttons/CustomButton";
import Spacer from "../spacer/Spacer";

const Wrapper = styled.div`
  position: relative;
  padding: 5rem 2.5rem;

  .bottom-left {
    position: absolute;
    bottom: 3rem;
    left: 90%;
    animation: blinker 4s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-top: 1rem;
  padding-top: 1.5rem;

  .con {
    margin: 0 auto;
  }

  .trash {
    margin-top: -0.2rem;
    margin-right: 0.6rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${AppColors.WHITE};
  }

  p {
    color: #fff;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BlackBtn = styled.button`
  border: none;
  padding: 1em 1.7em;
  border-radius: 73px;
  background-color: ${AppColors.Success};
  color: ${AppColors.WHITE};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Success({ closeModal }) {
  return (
    <Wrapper>
      <img className="top-left" src="./images/BrightP.svg" alt="flare" />
      <>
        <InnerWrapper>
          <img
            className="con"
            src="./images/congratulation.svg"
            alt="congrats"
          />
          <h2>Congratulations</h2>
          <h2>You have successfully Registered</h2>
          <Spacer height="1rem" />
          <p>Yes, it was easy and you did it!</p>
          <p className="flex">
            Check your mail box for next step{" "}
            <img src="./images/wink.svg" alt="wink" />
          </p>
          <Spacer height="1.5rem" />
          <CustomButton
            color="#fff"
            width="100%"
            bg="linear-gradient(45deg, #FF26B9, #903AFF )"
            onClick={(e) => {
              window.location.reload();
            }}
          >
            Back
          </CustomButton>
        </InnerWrapper>
      </>
      <img className="bottom-left" src="./images/BrightP.svg" alt="flare" />
    </Wrapper>
  );
}

export default Success;

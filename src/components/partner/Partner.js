import React from "react";
import { styled } from "styled-components";
import { AppColors } from "../../config/AppColors";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  position: relative;
`;

export const InnerFlex = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  .top-flare {
    position: absolute;
    top: -10rem;
    left: -25rem;
    width: 70%;
  }
  .bottom-flare {
    position: absolute;
    bottom: -25rem;
    left: 95%;
    width: 60%;
    @media (max-width: 960px) {
      bottom: -10rem;
      left: 70%;
      width: 80%;
    }
  }

  .part {
    padding: 4rem;
    margin-top: 4rem;
    border: 1px solid ${AppColors.LightPurple};
    border-radius: 5px;

    @media (max-width: 960px) {
      padding: 2rem;
      margin-top: 2rem;
    }
  }

  .txt-flx {
    position: relative;
    z-index: 2;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    @media (max-width: 960px) {
      font-size: 1.5rem;
    }
  }
  .whity {
    color: #fff;
  }
  .purp {
    color: ${AppColors.LightPurple};
  }
  p {
    color: #fff;
    margin: 1rem 0;
    padding: 0 25%;

    @media (max-width: 960px) {
      padding: 0 5%;
    }
  }
`;

function Partner() {
  return (
    <Wrapper>
      <Slide up>
        <InnerFlex>
          <img
            className="top-flare"
            src="./images/Purple-Lens.png"
            alt="flare"
          />
          <div className="txt-flx">
            <h2 className="whity">Partners and Sponsors</h2>
            <p>
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <img className="part" src="./images/Partner.svg" alt="idea" />
          <img
            className="bottom-flare"
            src="./images/Purple-Lens.png"
            alt="flare"
          />
        </InnerFlex>
      </Slide>
    </Wrapper>
  );
}

export default Partner;

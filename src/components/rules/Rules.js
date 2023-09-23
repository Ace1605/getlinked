import React from "react";
import { styled } from "styled-components";
import { AppColors } from "../../config/AppColors";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  position: relative;
`;

export const InnerFlex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 5;
  margin-top: 4rem;

  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
    gap: 5rem;
  }
  .img-flx {
    width: 40%;
    @media (max-width: 960px) {
      width: 100%;
      order: 1;
    }
    .bottom-flare {
      position: absolute;
      top: 35%;
      left: 90%;
      width: 50%;
      @media (max-width: 960px) {
        top: -3rem;
        left: -4rem;
        width: 100%;
      }
    }
    .wom {
      position: relative;
      z-index: 2;
      @media (max-width: 960px) {
        margin: 0 auto;
      }
    }
  }
  .txt-flx {
    position: relative;
    z-index: 5;
    width: 40%;
    @media (max-width: 960px) {
      width: 100%;
      text-align: center;
      order: 2;
    }

    .top-flare {
      position: absolute;
      z-index: 0;
      top: -8rem;
      left: -2%;
      @media (max-width: 960px) {
        left: 50%;
      }
    }
    h2 {
      position: relative;
      z-index: 2;
      font-size: 2rem;
      font-weight: 700;
      margin: 0;
    }
    .whity {
      position: relative;
      color: #fff;
      z-index: 2;
    }
    .purp {
      color: ${AppColors.LightPurple};
    }
    p {
      color: #fff;
      margin-top: 1rem;
      position: relative;
      z-index: 2;
    }
  }
`;

function Rules() {
  return (
    <Wrapper>
      <InnerFlex>
        <div className="txt-flx">
          <img
            className="top-flare"
            src="./images/Purple-Lens.png"
            alt="flare"
          />
          <h2 className="whity">Rules and</h2>
          <h2 className="purp">Guidelines</h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="img-flx">
          <Slide top>
            <img className="wom" src="./images/women.svg" alt="idea" />
          </Slide>
          <img
            className="bottom-flare"
            src="./images/Purple-Lens.png"
            alt="flare"
          />
        </div>
      </InnerFlex>
    </Wrapper>
  );
}

export default Rules;

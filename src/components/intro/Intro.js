import React from "react";
import { styled } from "styled-components";
import { AppColors } from "../../config/AppColors";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  position: relative;
`;

export const InnerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
    }
    img {
      @media (max-width: 960px) {
        margin: 0 auto;
      }
    }
  }
  .txt-flx {
    width: 40%;
    @media (max-width: 960px) {
      width: 100%;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin: 0;
    }
    .whity {
      color: #fff;
    }
    .purp {
      color: ${AppColors.LightPurple};
    }
    p {
      color: #fff;
      margin-top: 1rem;
    }
  }
`;

function Intro() {
  return (
    <Wrapper id="overview">
      <Fade bottom>
        <InnerFlex>
          <div className="img-flx">
            {" "}
            <img src="./images/dea.svg" alt="idea" />
          </div>
          <div className="txt-flx">
            <h2 className="whity">Introduction to getlinked</h2>
            <h2 className="purp">tech Hackathon 1.0</h2>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </InnerFlex>
      </Fade>
    </Wrapper>
  );
}

export default Intro;

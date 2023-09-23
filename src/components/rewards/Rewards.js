import React from "react";
import { styled } from "styled-components";
import { AppColors } from "../../config/AppColors";
import Spacer from "../spacer/Spacer";
import Zoom from "react-reveal/Zoom";

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 960px) {
    padding: 0 1rem;
  }
`;

export const InnerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;

  .m-did {
    display: none;
    @media (max-width: 960px) {
      display: block;
      text-align: center;

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
  }

  .d-did {
    display: block;
    @media (max-width: 960px) {
      display: none;
    }
  }

  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
    gap: 5rem;
  }
  .img-flx {
    position: relative;
    z-index: 2;
    width: 40%;
    @media (max-width: 960px) {
      width: 100%;
      order: 1;
    }

    .top-flare {
      position: absolute;
      @media (max-width: 960px) {
        top: 3rem;
        left: -5rem;
      }
    }
    .cup {
      position: relative;
      z-index: 2;
      @media (max-width: 960px) {
        margin: 0 auto;
      }
    }
  }
  .txt-flx {
    position: relative;
    width: 40%;
    @media (max-width: 960px) {
      width: 100%;
      text-align: center;
      order: 2;
    }
    .bottom-flare {
      position: absolute;
      bottom: -15rem;
      left: 90%;
      @media (max-width: 960px) {
        left: 70%;
        bottom: -5rem;
      }
    }

    .rew {
      position: relative;
      z-index: 2;
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

function Rewards() {
  return (
    <Wrapper>
      <Zoom>
        <InnerFlex>
          <div className="img-flx">
            <div className="m-did">
              <h2 className="whity">Prizes and</h2>
              <h2 className="purp">Rewards</h2>
              <p>
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <img
              className="top-flare"
              src="./images/Purple-Lens.png"
              alt="flare"
            />
            <img className="cup" src="./images/cup.svg" alt="idea" />
          </div>
          <div className="txt-flx">
            <div className="d-did">
              <h2 className="whity">Prizes and</h2>
              <h2 className="purp">Rewards</h2>
              <p>
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <Spacer height="2rem" />
            <img className="rew" src="./images/Rewards.svg" alt="idea" />
            <img
              className="bottom-flare"
              src="./images/Purple-Lens.png"
              alt="flare"
            />
          </div>
        </InnerFlex>
      </Zoom>
    </Wrapper>
  );
}

export default Rewards;

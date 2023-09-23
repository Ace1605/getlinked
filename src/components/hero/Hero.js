import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";
import { CurvedLine } from "../../svg/Other";
import CustomButton from "../buttons/CustomButton";
import CountdownTime from "../countdown/CountdownTime";
import Spacer from "../spacer/Spacer";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";

const Wrapper = styled.div`
  position: relative;
  margin-top: 2rem;

  .holding {
    position: relative;
    display: block;

    @media (max-width: 960px) {
      float: none;
      margin: 0 auto;
    }

    .top-flare {
      position: absolute;
      top: -10rem;
      @media (max-width: 960px) {
        top: -3rem;
        left: -2rem;
      }
    }

    .top-left {
      position: absolute;
      left: 3rem;
      animation: blinker 2s linear infinite;
      @media (max-width: 960px) {
        width: 0.75rem;
        top: 4rem;
        left: 28%;
        z-index: 1;
      }

      @keyframes blinker {
        50% {
          opacity: 0;
        }
      }
    }

    svg {
      position: absolute;
      right: 1rem;

      @media (max-width: 960px) and (min-width: 663px) {
        width: 10rem;
        left: 62%;
      }
      @media (max-width: 662px) {
        width: 6rem;
        left: 62%;
      }
    }
  }

  h2 {
    position: relative;
    z-index: 2;
    color: #fff;
    font-size: 2.125rem;
    font-weight: 700;
    text-align: right;
    font-style: italic;
    letter-spacing: 0.2rem;

    @media (max-width: 960px) and (min-width: 663px) {
      text-align: center;
      font-size: 1.6rem;
    }
    @media (max-width: 662px) {
      text-align: center;
      font-size: 0.75rem;
    }
  }
  h2 ~ svg {
    float: right;
  }
`;

const InnerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  z-index: 2;

  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
    margin-top: 1rem;
  }

  .lefty {
    position: relative;
    width: 50%;
    @media (max-width: 960px) {
      width: 100%;
      text-align: center;
      margin-bottom: 3rem;
    }
    .bottom-right {
      position: absolute;
      left: 80%;
      bottom: 4rem;
      animation: blinker 3s linear infinite;
      @media (max-width: 960px) {
        width: 0.6rem;
        bottom: 7rem;
      }
      @keyframes blinker {
        50% {
          opacity: 0;
        }
      }
    }
    .white {
      color: #fff;
      font-size: 1.12rem;
      @media (max-width: 960px) {
        margin: 0.8rem 0;
      }
    }
  }

  .flexer {
    position: relative;
    @media (max-width: 960px) {
      text-align: center;
      display: grid;
      margin-top: 3rem;
    }

    .bulb {
      position: absolute;
      right: 13rem;
      top: -2.5rem;

      @media (max-width: 960px) {
        left: 70%;
        top: -1.5rem;
        width: 1.5rem;
      }
    }
  }

  h1 {
    position: relative;
    z-index: 2;
    color: #fff;
    font-size: 4.5rem;
    font-weight: 700;

    @media (max-width: 1370px) and (min-width: 1220px) {
      font-size: 4rem;
    }
    @media (max-width: 1219px) and (min-width: 961px) {
      font-size: 3rem;
    }
    @media (max-width: 960px) {
      font-size: 2rem;
      text-align: center;
    }

    span {
      color: ${AppColors.LightPurple};
    }

    img {
      display: inline;
      @media (max-width: 1370px) and (min-width: 961px) {
        width: 3.2rem;
      }
      @media (max-width: 960px) {
        width: 2rem;
      }
    }
  }

  .vr {
    position: relative;
    width: 50%;
    @media (max-width: 960px) {
      width: 100%;
      margin-top: 2rem;
    }
    .bottom-right {
      animation: blinker 1s linear infinite;
      @keyframes blinker {
        50% {
          opacity: 0;
        }
      }
    }
    .right-flare {
      position: absolute;
      z-index: 0;
      left: 15%;
      top: -8rem;
      @media (max-width: 960px) {
        left: 35%;
        top: -5rem;
        z-index: 0;
      }
    }
    .guy {
      position: relative;
      z-index: 2;
      @media (max-width: 960px) {
        margin-top: -1.3rem;
      }
    }

    .ball {
      position: absolute;
      z-index: 2;
      top: 0;
      width: 90%;
      animation: rotation 20s infinite linear;

      @media (max-width: 960px) {
        width: 80%;
      }
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }
`;

function Hero() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="holding">
        <h2>
          <Typewriter
            options={{
              strings: ["Igniting a Revolution in HR Innovation"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <img className="top-left" src="./images/BrightStar.svg" alt="flare" />
        <img className="top-flare" src="./images/Purple-Lens.png" alt="flare" />
        <CurvedLine />
      </div>
      <InnerFlex>
        <div className="lefty">
          <div className="flexer">
            <img className="bulb" src="./images/lightbulb.svg" alt="bulb" />
            <h1>
              getlinked Tech Hackathon <span>1.0</span>
              <img src="./images/chain.svg" alt="chain" />
              <img src="./images/fire.svg" alt="fire" />
            </h1>
          </div>
          <p className="white">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Spacer height="1rem" />
          <CustomButton
            color="#fff"
            width="10rem"
            bg="linear-gradient(45deg, #FF26B9, #903AFF )"
            onClick={() => navigate("/register")}
          >
            Register
          </CustomButton>
          <Spacer height="3rem" />
          <CountdownTime />
          <img
            className="bottom-right"
            src="./images/PaleStar.svg"
            alt="flare"
          />
        </div>
        <Fade left>
          <div className="vr">
            <img
              className="bottom-right"
              src="./images/PaleStar.svg"
              alt="flare"
            />
            <img
              className="right-flare"
              src="./images/Purple-Lens.png"
              alt="flare"
            />
            <img className="guy" src="./images/vr.svg" alt="hack_guy" />
            <img className="ball" src="./images/ball.svg" alt="hack_guy" />
          </div>
        </Fade>
      </InnerFlex>
    </Wrapper>
  );
}

export default Hero;

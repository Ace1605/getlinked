import React from "react";
import { styled } from "styled-components";
import { AppColors } from "../../config/AppColors";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import Spacer from "../spacer/Spacer";
import { Checked, Plus } from "../../svg/Other";
import CustomButton from "../buttons/CustomButton";
import Tada from "react-reveal/Tada";

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

  .btn-wrap {
    text-align: center;
  }
  .trans {
    position: relative;
    z-index: 2;
    border: 1px solid ${AppColors.LightPurple};
    background: rgba(255, 255, 255, 0.03);
    padding: 3rem;
    border-radius: 5px;

    @media (max-width: 960px) {
      padding: 3rem 1rem;
    }

    .top-flare {
      position: absolute;
      top: 55%;
      left: -12rem;
      width: 70%;
      @media (max-width: 960px) {
        left: -5rem;
        top: 60%;
      }
    }
  }
  .img-flx {
    position: relative;
    width: 40%;

    .shield {
      position: absolute;
      top: 0;
    }
    @media (max-width: 960px) {
      width: 100%;
    }
    .lock {
      margin-top: 35%;
      width: 90%;
      @media (max-width: 960px) {
        margin: 35% auto 0;
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
    .updated {
      font-size: 0.8rem;
    }
  }
`;

const Flexed = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  svg {
    width: 1.5rem;
  }
`;

function Privacy() {
  return (
    <Wrapper>
      <InnerFlex>
        <div className="txt-flx">
          <h2 className="whity">Privacy Policy and</h2>
          <h2 className="purp">Terms</h2>
          <p className="updated">Last updated on September 12, 2023</p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <Spacer height="2rem" />
          <div className="trans">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <Spacer height="2rem" />
            <h3 className="purp">Licensing Policy</h3>
            <h4 className="whity">Here are terms of our Standard License:</h4>
            <Spacer height="1rem" />
            <Flexed>
              <Checked />{" "}
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </Flexed>
            <Flexed>
              <Checked />{" "}
              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </Flexed>
            <Spacer height="1.5rem" />
            <div className="btn-wrap">
              <CustomButton
                color="#fff"
                width="10rem"
                bg="linear-gradient(45deg, #FF26B9, #903AFF )"
              >
                Read More
              </CustomButton>
            </div>
            <img
              className="top-flare"
              src="./images/Purple-Lens.png"
              alt="flare"
            />
          </div>
        </div>
        <div className="img-flx">
          <Tada>
            <img className="lock" src="./images/lock.svg" alt="idea" />
            <img className="shield" src="./images/shield.svg" alt="idea" />
          </Tada>
        </div>
      </InnerFlex>
    </Wrapper>
  );
}

export default Privacy;

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
import { BigQ, Plus, SmallQ } from "../../svg/Other";
import Shake from "react-reveal/Shake";

const Wrapper = styled.div`
  position: relative;
  margin-top: 10rem;
`;

export const InnerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
    gap: 8rem;
  }
  .img-flx {
    position: relative;
    width: 40%;
    @media (max-width: 960px) {
      width: 100%;
    }
    .bigQ {
      position: absolute;
      left: 30%;
      top: -4rem;
      @media (max-width: 960px) {
        top: -5rem;
      }
    }
    .sQ {
      position: absolute;
      left: 10%;
      top: -2rem;
      @media (max-width: 960px) {
        top: -3rem;
      }
    }
    .lQ {
      position: absolute;
      right: 35%;
      top: -2rem;
      @media (max-width: 960px) {
        top: -3rem;
      }
    }
    img {
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

    .top-left {
      position: absolute;
      top: -2rem;
      left: -2rem;
      @media (max-width: 960px) {
        left: 1rem;
      }
      animation: blinker 4s linear infinite;
      @keyframes blinker {
        50% {
          opacity: 0;
        }
      }
    }

    .accordion {
      border: none;
    }
    .accordion__item {
      border-bottom: 2px solid ${AppColors.LightPurple};
    }
    .accordion__button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
    }
    .accordion__button:before {
      display: none;
    }
    @media (max-width: 960px) {
      width: 100%;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin: 0;
      @media (max-width: 960px) {
        font-size: 1.6rem;
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
      margin-top: 1rem;
      @media (max-width: 960px) {
        font-size: 0.95rem;
      }
    }
  }
`;

function Faqs() {
  return (
    <Wrapper id="faqs">
      <InnerFlex>
        <div className="txt-flx">
          <img className="top-left" src="./images/BrightP.svg" alt="flare" />
          <h2 className="whity">Frequently Ask</h2>
          <h2 className="purp">Question</h2>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <Spacer height="2rem" />
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Can I work on a project I started before the hackathon?</p>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>What happens if I need help during the hackathon?</p>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>What happens if I don't have an idea for a project?</p>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Can I join a team or do I have to come with one?</p>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>What happens after the hackathon ends</p>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p>Can I work on a project I started before the hackathon?</p>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="img-flx">
          <Shake>
            <div className="bigQ">
              <BigQ />
            </div>
            <div className="sQ">
              <SmallQ />
            </div>
            <div className="lQ">
              <SmallQ />
            </div>
            <img src="./images/question.svg" alt="idea" />
          </Shake>
        </div>
      </InnerFlex>
    </Wrapper>
  );
}

export default Faqs;

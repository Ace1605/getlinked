import React from "react";
import { styled } from "styled-components";
import { AppColors } from "../../config/AppColors";
import { Five, Four, Line, One, Six, Three, Two } from "../../svg/Other";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  position: relative;
  padding: 3rem 0;

  .three {
    @media (max-width: 960px) {
      padding: 1.5rem 0 0rem 0;
    }
  }
  .five {
    @media (max-width: 960px) {
      padding: 1.5rem 0 0.5rem 0;
    }
  }

  .top {
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.5rem;
    color: ${AppColors.LightPurple};
    font-weight: 600;

    @media (max-width: 960px) {
      font-size: 1rem;
    }
  }

  p {
    color: #fff;
    @media (max-width: 960px) {
      font-size: 0.85rem;
    }
  }

  .hold {
    padding-top: 2rem;
  }
`;

export const InnerFlex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 8rem;

  @media (max-width: 960px) {
    display: flex;
    justify-content: space-between;
    align-items: self-end;
    margin-top: 3.8rem;
  }

  .top-left {
    position: absolute;
    top: -6rem;
    left: 8rem;
    @media (max-width: 960px) {
      top: -2.5rem;
      left: 5rem;
    }
    animation: blinker 1s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
  .bottom-left {
    position: absolute;
    left: 85%;
    top: -2rem;
    width: 1.3rem;
    @media (max-width: 960px) {
      top: 5.5rem;
      width: 1rem;
    }
    animation: blinker 1s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
  .left {
    width: 30%;
    @media (max-width: 1138px) and (min-width: 961px) {
      width: 38%;
    }
    @media (max-width: 960px) {
      display: none;
    }
  }
  .middle > svg {
    @media (max-width: 960px) {
      margin-bottom: -1rem !important;
    }
  }
  .middle {
    position: relative;
    width: 10%;
    text-align: center;
    svg {
      margin: 0 auto;
      @media (max-width: 960px) {
        width: 2rem;
      }
    }
    span {
      position: absolute;
      left: 50%;
      top: -10rem;
      @media (max-width: 960px) {
        top: -7.2rem;
        margin-left: -1rem;
        height: 8rem;
      }
    }
    span svg {
      @media (max-width: 960px) {
        height: 7rem;
      }
    }
  }
  .right {
    width: 30%;
    @media (max-width: 960px) {
      width: 80%;
    }

    .hidden {
      display: none;
      @media (max-width: 960px) {
        display: block;
      }
    }
  }
`;

function Timeline() {
  return (
    <Wrapper id="timeline">
      <div className="top">
        <h3>Timeline</h3>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="hold">
        <InnerFlex>
          <img className="top-left" src="./images/BrightP.svg" alt="flare" />
          <Slide left>
            <div className="left">
              <h4>Hackathon Announcement</h4>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
          </Slide>
          <div className="middle">
            <One />{" "}
            <span>
              <Line />
            </span>
          </div>
          <Slide right>
            <div className="right">
              <div className="hidden">
                <h4>Hackathon Announcement</h4>
                <p>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <h4>November 18, 2023</h4>
            </div>
          </Slide>
        </InnerFlex>
        <InnerFlex>
          <Slide left>
            <div className="left">
              <h4>November 18, 2023</h4>
            </div>
          </Slide>
          <div className="middle">
            <Two />{" "}
            <span>
              <Line />
            </span>
          </div>
          <Slide right>
            <div className="right">
              <h4>Teams Registration begins</h4>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
              <div className="hidden">
                <h4>November 18, 2023</h4>
              </div>
            </div>
          </Slide>
        </InnerFlex>
        <InnerFlex className="three">
          <Slide left>
            <div className="left">
              <h4>Teams Registration ends</h4>
              <p>Interested Participants are no longer Allowed to register</p>
            </div>
          </Slide>
          <div className="middle">
            <Three />{" "}
            <span>
              <Line />
            </span>
          </div>
          <Slide right>
            <div className="right">
              <div className="hidden">
                <h4>Teams Registration ends</h4>
                <p>Interested Participants are no longer Allowed to register</p>
              </div>
              <h4>November 18, 2023</h4>
            </div>
          </Slide>
          <img
            className="bottom-left"
            src="./images/BrightStar.svg"
            alt="flare"
          />
        </InnerFlex>
        <InnerFlex>
          <Slide left>
            <div className="left">
              {" "}
              <h4>November 18, 2023</h4>
            </div>
          </Slide>
          <div className="middle">
            <Four />{" "}
            <span>
              <Line />
            </span>
          </div>
          <Slide right>
            <div className="right">
              <h4>Announcement of the accepted teams and ideas</h4>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <div className="hidden">
                <h4>November 18, 2023</h4>
              </div>
            </div>
          </Slide>
        </InnerFlex>
        <InnerFlex className="five">
          <Slide left>
            <div className="left">
              <h4>Getlinked Hackathon 1.0 Offically Begins</h4>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
          </Slide>
          <div className="middle">
            <Five />{" "}
            <span>
              <Line />
            </span>
          </div>
          <Slide right>
            <div className="right">
              <div className="hidden">
                <h4>Getlinked Hackathon 1.0 Offically Begins</h4>
                <p>
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <h4>November 18, 2023</h4>
            </div>
          </Slide>
        </InnerFlex>
        <InnerFlex>
          <Slide left>
            <div className="left">
              {" "}
              <h4>November 18, 2023</h4>
            </div>
          </Slide>
          <div className="middle">
            <Six />{" "}
            <span>
              <Line />
            </span>
          </div>
          <Slide right>
            <div className="right">
              <h4>Demo Day</h4>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
              <div className="hidden">
                <h4>November 18, 2023</h4>
              </div>
            </div>
          </Slide>
        </InnerFlex>
      </div>
    </Wrapper>
  );
}

export default Timeline;

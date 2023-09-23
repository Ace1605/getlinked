import React from "react";
import { styled } from "styled-components";
import { AppColors } from "../../config/AppColors";
import { Eclipse } from "../../svg/Other";
import CustomButton from "../buttons/CustomButton";
import Spacer from "../spacer/Spacer";
import Zoom from "react-reveal/Zoom";

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
    position: relative;
    width: 40%;
    @media (max-width: 960px) {
      width: 100%;
    }

    svg {
      position: absolute;
      left: 3.5rem;
      top: -3rem;
      @media (max-width: 960px) {
        display: none;
      }
    }
    .top-flare {
      position: absolute;
      top: 35%;
      @media (max-width: 960px) {
        left: -2rem;
      }
    }
    .cri {
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
    }
    .bottom-flare {
      position: absolute;
      bottom: -18rem;
      left: 65%;
      @media (max-width: 960px) {
        bottom: 0;
        left: 55%;
      }
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
      position: relative;
      z-index: 2;
      color: #fff;
      margin-top: 1rem;
    }
  }
`;

function Criteria() {
  return (
    <Wrapper>
      <InnerFlex>
        <div className="img-flx">
          <Zoom>
            <Eclipse />
            <img className="cri" src="./images/manwoman.svg" alt="idea" />
            <img
              className="top-flare"
              src="./images/Purple-Lens.png"
              alt="flare"
            />
          </Zoom>
        </div>
        <div className="txt-flx">
          <h2 className="whity">Judging Criteria</h2>
          <h2 className="purp">Key attributes</h2>
          <p>
            <span className="purp">Innovation and Creativity:</span> Evaluate
            the uniqueness and creativity of the solution. Consider whether it
            addresses a real-world problem in a novel way or introduces
            innovative features.
          </p>
          <p>
            <span className="purp">Functionality:</span> Assess how well the
            solution works. Does it perform its intended functions effectively
            and without major issues? Judges would consider the completeness and
            robustness of the solution.
          </p>
          <p>
            <span className="purp">Impact and Relevance:</span> Determine the
            potential impact of the solution in the real world. Does it address
            a significant problem, and is it relevant to the target audience?
            Judges would assess the potential social, economic, or environmental
            benefits.
          </p>
          <p>
            <span className="purp">Technical Complexity:</span> Evaluate the
            technical sophistication of the solution. Judges would consider the
            complexity of the code, the use of advanced technologies or
            algorithms, and the scalability of the solution.
          </p>
          <p>
            <span className="purp">Adherence to Hackathon Rules:</span> Judges
            will Ensure that the team adhered to the rules and guidelines of the
            hackathon, including deadlines, use of specific technologies or
            APIs, and any other competition-specific requirements.
          </p>
          <Spacer height="2rem" />
          <CustomButton
            color="#fff"
            width="10rem"
            bg="linear-gradient(45deg, #FF26B9, #903AFF )"
          >
            Read More
          </CustomButton>
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

export default Criteria;

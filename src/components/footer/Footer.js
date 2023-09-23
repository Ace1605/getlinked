import React from "react";
import { styled } from "styled-components";
import { AppColors } from "../../config/AppColors";
import { Location, Phone } from "../../svg/Other";
import { FaceBook, Insta, LinkedIn, Twitter } from "../../svg/Social";
import Logo from "../logo/Logo";
import Spacer from "../spacer/Spacer";

const Wrapper = styled.div`
  position: relative;
  background-color: #100b20;

  .copy {
    text-align: center;
    padding: 0rem 0 2rem 0;
    p {
      color: #fff;
    }
  }
`;

export const InnerFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 4rem;
  padding: 2rem 17%;

  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
    gap: 5rem;
  }

  p {
    color: #fff;
  }

  .log {
    width: 40%;
    @media (max-width: 960px) {
      width: 100%;
    }
  }
  .links,
  .contact {
    width: 20%;
    @media (max-width: 960px) {
      width: 100%;
    }
  }

  .links,
  .contact {
    margin-top: 2rem;

    p {
      margin: 0.5rem 0;
    }
  }

  h3 {
    color: ${AppColors.LightPurple};
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .flexy {
    display: flex;
    align-items: center;

    .pri {
      border-left: 2px solid ${AppColors.LightPurple};
      margin-left: 1rem;
      padding-left: 1rem;
    }
  }
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .purp {
    color: ${AppColors.LightPurple};
  }
`;

function Footer() {
  return (
    <Wrapper>
      <InnerFlex>
        <div className="log">
          <Logo />
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <Spacer height="1rem" />
          <div className="flexy">
            {" "}
            <p>Terms of Use</p> <p className="pri">Privacy Policy</p>
          </div>
        </div>
        <div className="links">
          <h3>Useful Links</h3>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <Flex>
            <p className="purp">Follow us</p>
            <Insta />
            <Twitter />
            <FaceBook />
            <LinkedIn />
          </Flex>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <Flex>
            <Phone />
            <p>+234 6707653444</p>
          </Flex>
          <Flex>
            <Location />
            <p>27,Alara Street Yaba 100012 Lagos State</p>
          </Flex>
        </div>
      </InnerFlex>
      <div className="copy">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </Wrapper>
  );
}

export default Footer;

import React, { useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import Form from "../components/form/Form";
import Navbar from "../components/navbar/Navbar";
import Spacer from "../components/spacer/Spacer";
import { AppColors } from "../config/AppColors";
import { Back } from "../svg/Menu";
import { FaceBook, Insta, LinkedIn, Twitter } from "../svg/Social";
import { toast } from "react-toast";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  padding: 2rem 3rem 3rem 3rem;
  overflow-y: hidden;
  min-height: 100vh;
  overflow-x: hidden;

  @media (max-width: 780px) {
    padding: 1rem 3rem;
  }

  .hid-mobile {
    display: block;
    @media (max-width: 960px) {
      display: none;
    }
  }

  .show-mobile {
    display: none;
    @media (max-width: 960px) {
      position: relative;
      z-index: 2;
      display: block;
      margin-top: 2rem;
    }

    svg {
      cursor: pointer;
    }
  }
`;

const RegContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 0 5%;
  gap: 1rem;

  .d-hidden {
    display: none;
    @media (max-width: 960px) {
      display: grid;
      justify-content: center;
    }
    p {
      text-align: center;
    }
  }

  .top-left {
    position: absolute;
    top: 0%;
    left: 8%;
    @media (max-width: 960px) {
      left: 48%;
      width: 1.2rem;
    }
    animation: blinker 2s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
  .top-right {
    position: absolute;
    top: -7%;
    right: 8%;
    @media (max-width: 960px) {
      top: 9%;
    }
    animation: blinker 4s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
  .middle {
    position: absolute;
    top: 25%;
    left: -14%;
    @media (max-width: 960px) {
      display: none;
    }
    animation: blinker 4s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
  .bottom-left {
    position: absolute;
    bottom: 8%;
    left: -2.5%;
    @media (max-width: 960px) {
      bottom: 13%;
      width: 1.2rem;
    }
    animation: blinker 4s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
  .bottom-right {
    position: absolute;
    bottom: 4%;
    right: 0%;
    @media (max-width: 960px) {
      bottom: 22%;
      right: -8%;
      width: 1.2rem;
    }
    animation: blinker 2s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0%;
  }

  .left {
    @media (max-width: 960px) {
      display: none;
    }
  }
  .top-flare {
    position: absolute;
    top: -45%;
    left: -30%;

    @media (max-width: 960px) {
      top: -18%;
      left: -25%;
    }
  }
  .bottom-flare {
    position: absolute;
    right: -40%;
    bottom: -80%;

    @media (max-width: 960px) {
      display: none;
    }
  }

  .half {
    min-width: 45%;
    position: relative;
    z-index: 2;
    @media (max-width: 960px) {
      width: 100%;
    }

    @media (max-width: 1116px) and (min-width: 961px) {
      min-width: 35%;
    }

    h3 {
      font-size: 2rem;
      margin-top: 4rem;
      font-weight: 600;
    }
    .colored {
      color: ${AppColors.LightPurple};
    }
    p {
      color: #fff;
    }
  }
`;
const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    cursor: pointer;
    &:hover {
      path {
        fill: ${AppColors.LightPurple};
      }
    }
  }
`;
function Contact() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState(null);

  const sendRequest = async (name, phone, email, message) => {
    let courier = {
      email: email,
      phone_number: phone,
      first_name: name,
      message: message,
    };
    setSubmitting(true);
    const res = await api.create("hackathon/contact-form", courier);
    if (res.id) {
      setSubmitting(false);
      console.log(res);
      setValue(res);
      toast.success(
        "Thank you for reaching out, We will get back to you shortly."
      );
    } else {
      setSubmitting(false);
      toast.error(res?.data?.email[0]);
    }
  };

  const getPayload = (data) => {
    data?.email.length > 2 && data?.name.length > 2 && data?.phone.length > 9
      ? sendRequest(data.name, data.phone, data.email, data.message)
      : toast.info("Some details are missing");
  };
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <div className="hid-mobile">
          <Navbar />
        </div>
        <div className="show-mobile">
          <span onClick={() => navigate(-1)}>
            <Back />
          </span>
        </div>
        <RegContent>
          <img
            className="top-flare"
            src="./images/Purple-Lens.png"
            alt="flare"
          />
          <img className="top-left" src="./images/BrightP.svg" alt="flare" />
          <img className="top-right" src="./images/PaleStar.svg" alt="flare" />
          <div className="half left">
            <h3 className="colored">Get in touch</h3>
            <Spacer height="1rem" />
            <p>
              Contact <br />
              Information
            </p>
            <Spacer height="1rem" />
            <p>
              27, Alara Street <br />
              Yaba 1000012
              <br />
              Lagos State
            </p>
            <Spacer height="1rem" />
            <p>Call Us: 07067981819</p>
            <Spacer height="1rem" />
            <p>we are open from Monday-Friday</p>
            <p>08:00am - 05:00px</p>
            <Spacer height="2rem" />
            <p className="colored">Share on</p>
            <Spacer height="0.7rem" />
            <Flex>
              <Insta />
              <Twitter />
              <FaceBook />
              <LinkedIn />
            </Flex>
          </div>
          <div className="half">
            {" "}
            <img className="middle" src="./images/Invisique.svg" alt="flare" />
            <>
              <Form getPayload={getPayload} loading={submitting} val={value} />
              <div className="d-hidden">
                {" "}
                <p className="colored">Share on</p>
                <Spacer height="0.7rem" />
                <Flex>
                  <Insta />
                  <Twitter />
                  <FaceBook />
                  <LinkedIn />
                </Flex>
              </div>
            </>
            <img className="bottom-left" src="./images/DarkP.svg" alt="flare" />
          </div>
          <img
            className="bottom-flare"
            src="./images/Purple-Lens.png"
            alt="flare"
          />
          <img
            className="bottom-right"
            src="./images/BrightStar.svg"
            alt="flare"
          />
        </RegContent>
      </div>
    </Wrapper>
  );
}

export default Contact;

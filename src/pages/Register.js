import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import SplitForm from "../components/form/SplitForm";
import Navbar from "../components/navbar/Navbar";
import Spacer from "../components/spacer/Spacer";
import { AppColors } from "../config/AppColors";
import { toast } from "react-toast";
import Modal from "react-modal/lib/components/Modal";
import Success from "../components/modal/Success";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  position: relative;
  padding: 2rem 3rem;
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
      display: block;
      margin-top: 2rem;
    }
    h2 {
      position: relative;
      z-index: 1;
      color: ${AppColors.LightPurple};
      font-size: 1.3rem;
      font-weight: 700;
      padding: 0 7%;
    }
  }
`;

const RegContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 0;
  gap: 1rem;

  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
  }

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
    top: 4%;
    left: 8%;
    @media (max-width: 960px) {
      top: 10%;
      left: 100%;
      width: 1.2rem;
    }
    animation: blinker 4s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
  .top-right {
    position: absolute;
    top: 2%;
    right: 10%;
    @media (max-width: 960px) {
      top: 50%;
      left: -5%;
      width: 0.85rem;
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
    bottom: 15%;
    left: 20%;
    @media (max-width: 960px) {
      display: none;
    }
    animation: blinker 3s linear infinite;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }
  .bottom-left {
    position: absolute;
    bottom: 20%;
    left: -10%;
    @media (max-width: 960px) {
      bottom: 29.5%;
      left: 100%;
      width: 0.85rem;
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
    bottom: -1.5%;
    right: 6%;
    width: 0.8rem;
    @media (max-width: 960px) {
      display: none;
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
    margin-top: 2rem;
    @media (max-width: 960px) {
    }
  }
  .top-flare {
    position: absolute;
    top: -45%;
    left: -30%;

    @media (max-width: 960px) {
      top: 13%;
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

  .form {
    min-width: 40%;
  }
  .half {
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
`;
function Register() {
  const [loading, setLoading] = useState(false);
  const [cat, setCat] = useState([]);
  const [value, setValue] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const onOpenSuccessModal = () => setOpenSuccess(true);
  const onCloseSuccessModal = () => setOpenSuccess(false);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async (e) => {
    setLoading(true);
    const res = await api.getAll("hackathon/categories-list");
    if (res) {
      setLoading(false);
      console.log(res);
      setCat(res);
    } else {
      setLoading(false);
      setCat([]);
      console.log("league err", res);
    }
  };

  const regRequest = async (name, phone, email, topic, cat, size, checked) => {
    if (checked) {
      let courier = {
        email: email,
        phone_number: phone,
        team_name: name,
        group_size: size,
        project_topic: topic,
        category: cat,
        privacy_poclicy_accepted: checked,
      };
      setSubmitting(true);
      const res = await api.create("hackathon/registration", courier);
      if (res?.id) {
        setSubmitting(false);
        setValue(res);
        onOpenSuccessModal();
      } else {
        setSubmitting(false);
        toast.error(res?.data?.email[0]);
      }
    } else {
      toast.info("Kindly agree to our Privacy policy");
    }
  };

  const getPayload = (data) => {
    console.log("data", data);
    if (data.email.length > 3) {
      data?.email.includes("@")
        ? regRequest(
            data?.name,
            data?.phone,
            data?.email,
            data?.topic,
            data?.category?.id,
            data?.size?.value,
            data?.checked
          )
        : toast.info(
            "Email address invalid, kindly provide a valid email address"
          );
    }
  };

  const customStyles = {
    content: {
      top: "30rem",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "5px",
      paddingBottom: "1rem",
      minWidth: "45rem",
      maxWidth: "50rem",
    },
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.01)",
      overflowY: "auto",
    },
  };
  return (
    <Wrapper>
      <Modal
        isOpen={openSuccess}
        onRequestClose={onCloseSuccessModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Success closeModal={onCloseSuccessModal} />
      </Modal>
      <div className="inner-wrapper">
        <div className="hid-mobile">
          <Navbar />
        </div>
        <div className="show-mobile">
          <h2 className="colored">Register</h2>
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
            <Slide down>
              {" "}
              <img src="./images/dev-image.svg" alt="flare" />
            </Slide>
            <img className="middle" src="./images/PaleStar.svg" alt="flare" />
          </div>
          <div className="half form">
            {" "}
            <>
              <SplitForm
                getting={loading}
                data={cat}
                getPayload={getPayload}
                loading={submitting}
              />
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

export default Register;

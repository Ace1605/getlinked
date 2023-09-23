import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";
import CustomButton from "../buttons/CustomButton";
import Input from "../inputs/Input";
import TextAreaInput from "../inputs/TextAreaInput";
import Spacer from "../spacer/Spacer";

const Wrapper = styled.div`
  position: relative;
  background: hsl(0deg 0% 0% / 10%);
  width: 100%;
  padding: 5rem;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: 960px) {
    background: none;
    padding: 3rem 0rem;
  }

  h4 {
    color: ${AppColors.LightPurple};
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .white {
    display: none;
    @media (max-width: 960px) {
      display: block;
      margin: 0rem 0 2rem 0;
    }
  }
`;

const FormWrap = styled.form`
  position: relative;
  text-align: center;
`;

const MInput = styled.input`
  display: none;
  border-radius: 0.2rem;
  padding: 1.3em 1em;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #fff;
  font-weight: 400;
  background-color: transparent;
  color: #fff;

  @media (max-width: 960px) {
    display: block;
  }

  ::placeholder {
    color: #fff !important;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 360px) {
    padding: 1.3em 1em 1.3em 1em;
  }
`;

const DInput = styled.input`
  display: block;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  padding: 1.3em 1em;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #fff;
  font-weight: 400;
  background-color: transparent;
  color: #fff;

  ::placeholder {
    color: #fff !important;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 360px) {
    padding: 1.3em 1em 1.3em 1em;
  }
`;

function Form({ getPayload, loading, val }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pNum, setPNum] = useState("");
  const inputElem = useRef();

  const handleOnWheel = (e) => {
    // The blur event fires when an element has lost focus. The event does not bubble,
    inputElem.current.blur();
  };

  const payload = {
    name: name,
    phone: pNum,
    email: email,
    message: message,
  };

  useEffect(() => {
    if (val !== null) {
      setName("");
      setPNum("");
      setEmail("");
      setMessage("");
      console.log("val", val);
    }
  }, [val]);

  const send = (e) => {
    e.preventDefault();
    getPayload(payload);
  };

  return (
    <Wrapper>
      <h4>
        Questions or need assistance?
        <br /> Let us know about it!
      </h4>
      <p className="white">
        Email us below to any question related to our event
      </p>
      <FormWrap>
        <DInput
          placeholder="First Name"
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <DInput
          value={pNum}
          type="number"
          ref={inputElem}
          onWheel={handleOnWheel}
          name="Phone Number"
          onChange={(e) => setPNum(e.target.value)}
          placeholder="Enter your phone number"
          required
        />

        <Input
          placeholder="Mail"
          required={true}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Spacer height="2rem" />
        <TextAreaInput
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Spacer height="2rem" />
        <CustomButton
          color="#fff"
          width="10rem"
          bg="linear-gradient(45deg, #FF26B9, #903AFF )"
          onClick={(e) => {
            send(e);
          }}
          isloading={loading}
        >
          Submit
        </CustomButton>
      </FormWrap>
    </Wrapper>
  );
}

export default Form;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";
import CustomButton from "../buttons/CustomButton";
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import TextAreaInput from "../inputs/TextAreaInput";
import Spacer from "../spacer/Spacer";

const Wrapper = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  width: 100%;
  padding: 5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  @media (max-width: 960px) {
    background: none;
    padding: 3rem 0rem;
    box-shadow: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  [type="checkbox"]:checked {
    border: 1px solid #fff;
  }

  [type="checkbox"]:focus {
    --tw-ring-color: transparent;
  }
  h4 {
    color: ${AppColors.LightPurple};
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  h3 {
    color: #fff;
    margin: 0.5rem 0 !important;
  }

  .rev {
    text-align: left !important;
    color: ${AppColors.LightPurple} !important;
  }

  .agree {
    padding: 1rem 0;
    text-align: left;
    span {
      color: #fff;
      padding-left: 0.5rem;
    }

    input {
      background-color: transparent;
    }
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

  input::placeholder {
    color: ${AppColors.GreyShade} !important;
  }

  .mobile-btn {
    display: none;
    @media (max-width: 960px) {
      display: block;
    }
  }
  .desktop-btn {
    display: block;
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

const MInput = styled.input`
  display: block;
  border-radius: 0.2rem;
  padding: 1em 1em;
  margin-bottom: 2rem;
  width: 100%;

  box-sizing: border-box;
  border: 1px solid #fff;
  font-weight: 400;
  background-color: transparent;
  color: #fff;

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

  @media (max-width: 960px) {
    display: none;
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

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 1.5rem;

  @media (max-width: 960px) {
    display: grid;
    gap: 0rem;
  }
`;

const SelectFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 1.5rem;
`;

const InputWrap = styled.div`
  position: relative;
  text-align: left;
  width: 100%;
  label {
    color: #fff;
  }
`;

function SplitForm({ data, getPayload, loading }) {
  const inputElem = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [pNum, setPNum] = useState("");
  const [category, setCategory] = useState(null);
  const [gSize, setGSize] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnWheel = (e) => {
    // The blur event fires when an element has lost focus. The event does not bubble,
    inputElem.current.blur();
  };

  const payload = {
    name: name,
    phone: pNum,
    email: email,
    topic: topic,
    category: category,
    size: gSize,
    checked: isChecked,
  };

  const getCat = (data) => {
    setCategory(data);
  };

  const getNum = (data) => {
    setGSize(data);
  };

  return (
    <Wrapper>
      <h4>Register</h4>
      <img src="./images/Part of move.svg" alt="move" />
      <h3>CREATE YOUR ACCOUNT</h3>
      <FormWrap>
        <Flex>
          <InputWrap>
            <label>Team's Name</label>
            <MInput
              className="fade"
              type="text"
              placeholder="Enter the name of your group"
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            />
          </InputWrap>
          <InputWrap>
            <label>Phone</label>
            <MInput
              className="fade"
              value={pNum}
              type="number"
              ref={inputElem}
              onWheel={handleOnWheel}
              name="Phone Number"
              onChange={(e) => setPNum(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </InputWrap>
        </Flex>
        <Flex>
          <InputWrap>
            <label>Email</label>
            <MInput
              className="fade"
              placeholder="Enter your email address"
              required={true}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <label>Project Topic</label>
            <MInput
              className="fade"
              placeholder="What is your group project topic"
              required={true}
              type="text"
              onChange={(e) => setTopic(e.target.value)}
              value={topic}
            />
          </InputWrap>
        </Flex>
        <SelectFlex>
          <InputWrap>
            <label>Category</label>
            <Select
              load={loading}
              holder="Select your category"
              data={data}
              getCat={getCat}
            />
          </InputWrap>
          <InputWrap>
            <label>Group Size</label>
            <Select holder="Select" getNum={getNum} load={loading} />
          </InputWrap>
        </SelectFlex>
        <Spacer height="1rem" />
        <p className="rev">
          Please review your registration details before submitting
        </p>
        <Spacer height="1rem" />
        <div className="agree">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(!isChecked);
            }}
          />{" "}
          <span className="keep">
            I agreed with the event terms and conditions and privacy policy
          </span>
        </div>
        <Spacer height="0.5rem" />
        <div className="mobile-btn">
          <CustomButton
            color="#fff"
            width="10rem"
            bg="linear-gradient(45deg, #FF26B9, #903AFF )"
            isloading={loading}
          >
            Submit
          </CustomButton>
        </div>
        <div className="desktop-btn">
          <CustomButton
            color="#fff"
            width="100%"
            bg="linear-gradient(45deg, #FF26B9, #903AFF )"
            onClick={(e) => {
              e.preventDefault();
              getPayload(payload);
            }}
            isloading={loading}
          >
            Register Now
          </CustomButton>
        </div>
      </FormWrap>
    </Wrapper>
  );
}

export default SplitForm;

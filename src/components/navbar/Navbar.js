import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Hamburger } from "../../svg/Menu";
import styled from "styled-components";
import CustomButton from "../buttons/CustomButton";
import Logo from "../logo/Logo";
import { MobileNav } from "./MobileNav";
import RegisterButton from "../buttons/RegisterButton";
import { Link } from "react-scroll/modules";

const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  z-index: 5;
`;

const InnerWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn-hold {
    @media (max-width: 960px) {
      display: none;
    }
  }

  .ham {
    display: none;
    @media (max-width: 960px) {
      display: block;
    }
  }
`;

const Flexed = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 30%;
  max-width: 50%;
  gap: 1rem;

  @media (max-width: 960px) {
    display: none;
  }
  .acc {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    weight: 400;

    &:hover {
      font-size: 1rem;
      weight: 400;
      background: -webkit-linear-gradient(45deg, #ff26b9, #903aff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .active {
    font-size: 1rem;
    weight: 400;
    background: -webkit-linear-gradient(45deg, #ff26b9, #903aff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const getShow = (data) => {
    setShow(data);
  };

  console.log("l", location);

  return (
    <Wrapper>
      {!show ? (
        <InnerWrap>
          <Logo />
          <Flexed>
            {location.pathname === "/" ? (
              <Link
                className="acc"
                to="timeline"
                style={{ cursor: "pointer" }}
                smooth={true}
              >
                Timeline
              </Link>
            ) : (
              <a href="#timeline" className="acc">
                Timeline
              </a>
            )}
            {location.pathname === "/" ? (
              <Link
                className="acc"
                to="overview"
                style={{ cursor: "pointer" }}
                smooth={true}
              >
                Overview
              </Link>
            ) : (
              <a href="#overview" className="acc">
                Overview
              </a>
            )}
            {location.pathname === "/" ? (
              <Link
                className="acc"
                to="faqs"
                style={{ cursor: "pointer" }}
                smooth={true}
              >
                FAQs
              </Link>
            ) : (
              <a href="#faqs" className="acc">
                FAQs
              </a>
            )}
            <a
              href="/contact"
              className={location.pathname === "/contact" ? "active" : "acc"}
            >
              Contact
            </a>
          </Flexed>
          <div className="btn-hold">
            {location.pathname.includes("register") ? (
              <RegisterButton
                color="#fff"
                width="10rem"
                onClick={() => navigate("/register")}
              >
                Register
              </RegisterButton>
            ) : (
              <CustomButton
                color="#fff"
                width="10rem"
                bg="linear-gradient(45deg, #FF26B9, #903AFF )"
                onClick={() => navigate("/register")}
              >
                Register
              </CustomButton>
            )}
          </div>
          <button
            onClick={() => setShow(!show)}
            className="my-auto h-10 rounded-lg ham"
          >
            <div className="x-center">
              <Hamburger />
            </div>
          </button>
        </InnerWrap>
      ) : (
        <MobileNav getShow={getShow} />
      )}
    </Wrapper>
  );
}

export default Navbar;

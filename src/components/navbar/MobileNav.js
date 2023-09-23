import { BoxCancel } from "../../svg/Menu";
import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { convertToUrlString } from "../../utils";
import CustomButton from "../buttons/CustomButton";
import { Link } from "react-scroll/modules";

const MobileMenuWrapper = styled.div`
  position: relative;
  background-color: #150e28;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      font-size: 1rem;
      weight: 400;
      background: -webkit-linear-gradient(45deg, #ff26b9, #903aff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
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

  .x-between {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 2.5rem;
  }
  .x-center {
    border: 1px solid #903aff;
    border-radius: 50%;
    padding: 0.5rem;
  }
`;

export const MobileNav = ({ getShow }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);
  const links = ["Timeline", "Overview", "FAQs"];

  useEffect(() => {
    getShow(show);
  }, [show]);

  return (
    <div className="y-center block 960:hidden m-nav">
      <MobileMenuWrapper>
        <div className="x-between">
          <button onClick={() => setShow(false)} className="my-auto">
            <div className="x-center">
              <BoxCancel />
            </div>
          </button>
        </div>

        <div className="px-3 pb-10">
          {links.map((link) => {
            return (
              <>
                {location.pathname === "/" ? (
                  <Link
                    className="acc my-auto -ml-2 block w-full p-4 text-left text-lg text-neutral-1000 text-opacity-70"
                    to={link.toLowerCase()}
                    style={{ cursor: "pointer" }}
                    smooth={true}
                  >
                    {link}
                  </Link>
                ) : (
                  <a
                    href={`/${convertToUrlString(link)}`}
                    onClick={() => setShow(false)}
                    key={link}
                    className="my-auto -ml-2 block w-full p-4 text-left text-lg text-neutral-1000 text-opacity-70"
                  >
                    {link}
                  </a>
                )}
              </>
            );
          })}
          <a
            href="/contact"
            onClick={() => setShow(false)}
            className="my-auto -ml-2 block w-full p-4 text-left text-lg text-neutral-1000 text-opacity-70"
          >
            Contact
          </a>
          <CustomButton
            color="#fff"
            width="10rem"
            bg="linear-gradient(45deg, #FF26B9, #903AFF )"
            onClick={() => navigate("/register")}
          >
            Register
          </CustomButton>
        </div>
      </MobileMenuWrapper>
    </div>
  );
};

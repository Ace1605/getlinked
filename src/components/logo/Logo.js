import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppColors } from "../../config/AppColors";

const LogoWrap = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 10;

  p {
    font-size: 3rem;
    color: #fff;

    @media (max-width: 780px) {
      font-size: 1.5rem;
    }
  }
  span {
    color: ${AppColors.LightPurple};
  }
`;

function Logo() {
  const navigate = useNavigate();
  return (
    <LogoWrap onClick={() => navigate("/")}>
      <p>
        get<span>linked</span>
      </p>
    </LogoWrap>
  );
}

export default Logo;

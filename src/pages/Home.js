import React from "react";
import styled from "styled-components";
import Criteria from "../components/criteria/Criteria";
import Faqs from "../components/faq/Faqs";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import Navbar from "../components/navbar/Navbar";
import Partner from "../components/partner/Partner";
import Privacy from "../components/privacy/Privacy";
import Rewards from "../components/rewards/Rewards";
import Rules from "../components/rules/Rules";
import Spacer from "../components/spacer/Spacer";
import Timeline from "../components/timeline/Timeline";

const MainWrap = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 960px) {
    padding: 2rem 1rem;
  }
`;

function Home() {
  return (
    <MainWrap>
      <Wrapper>
        <div className="inner-wrapper">
          <Navbar />
          <Hero />
          <Spacer height="4rem" />
          <Intro />
          <Rules />
          <Criteria />
          <Faqs />
          <Timeline />
          <Rewards />
          <Partner />
          <Privacy />
        </div>
      </Wrapper>
      <Footer />
    </MainWrap>
  );
}

export default Home;

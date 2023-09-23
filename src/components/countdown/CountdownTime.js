import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { AppFonts } from "../../config/AppFonts";

const Wrapper = styled.div`
  position: relative;

  .timer {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    font-family: ${AppFonts.medium};

    sub {
      font-weight: 400 !important;
      font-size: 1rem !important;
      margin-right: 0.5rem;
    }
  }
`;

const Completionist = () => <span>Time up</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className="timer">
        {hours}
        <sub>H </sub> {minutes}
        <sub>M </sub> {seconds}
        <sub>S</sub>
      </span>
    );
  }
};

function secondsUntil26thNoon() {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time for the 26th of the current month at 12 PM (noon)
  const noon26th = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 1, // 26th day of the month
    18, // Noon hour
    0, // Minutes
    0 // Seconds
  );

  // Calculate the number of milliseconds between now and the 26th at 12 PM
  const timeDifference = noon26th - currentDate;

  // Calculate the number of seconds from milliseconds
  const secondsRemaining = timeDifference / 1000;
  console.log("cur", secondsRemaining);
  return secondsRemaining;
}

// Call the function to get the result
const secondsRemaining = secondsUntil26thNoon();

console.log();
function CountdownTime() {
  return (
    <Wrapper>
      <Countdown
        date={Date.now() + secondsRemaining * 1000}
        renderer={renderer}
        zeroPadTime="2"
      />
    </Wrapper>
  );
}

export default CountdownTime;

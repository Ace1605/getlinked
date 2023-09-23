import React from "react";
import styled from "styled-components";

const Spaced = styled.div`
  position: relative;
`;

function Spacer({ height }) {
  return (
    <Spaced>
      <div style={{ height: height }}></div>
    </Spaced>
  );
}

export default Spacer;

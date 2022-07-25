import React from "react";
import styled from "styled-components";
import Palette from "../lib/Palette";
const ProgressBarBlock = styled.div``;
const CircularProgress = styled.div`
  position: relative;
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  &::before {
    position: absolute;
    content: "";
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: #fff;
  }
  .value-container {
    position: absolute;
    font-family: sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
  }
  background-image: ${(props) =>
    props.progressValue &&
    `conic-gradient(${Palette.green[2]} ${props.progressValue * 3.6}deg, ${
      Palette.green[0]
    } ${360 - props.progressValue * 3.6}deg)`};
`;

const ProgressBar = ({ currentProgressVal }) => {
  return (
    <ProgressBarBlock>
      <CircularProgress progressValue={currentProgressVal}>
        <div class='value-container'>{`${currentProgressVal}%`}</div>
      </CircularProgress>
    </ProgressBarBlock>
  );
};
export default ProgressBar;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4px 10px 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 10px;
  color: white;
`;

export const Results = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  text-align: left;
  display: flex;
  span {
    display: block;
    width: 20px;
  }
  :nth-child(1) {
    text-align: center;
  }
`;

export const Title = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  text-align: right;
`;

export const Slider = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  position: relative;
  input[type="range"] {
    appearance: none;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: transparent;
    outline: none;
    pointer-events: none;
    direction: rtl;
  }
  input[type="range"]::-moz-range-track {
    appearance: none;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: transparent;
    outline: none;
    pointer-events: none;
    direction: rtl;
  }
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    background-color: #eb8307;
    width: 15px;
    height: 15px;
    border-radius: 2px;
    rotate: 45deg;
    pointer-events: auto;
  }
  .track {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: #050505;
    border-radius: 5px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4px 10px 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 10px;
  color:white;
`;

export const Title = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  text-align: right;
  font-family: Shabnam;
`;

export const Results = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  text-align: left;
`;

export const Slider = styled.div`
  position: relative;
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;

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
  input[type=range]::-moz-range-track {
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
    height: 4px;
    width: 100%;
    background-color: #050505;
    border-radius: 5px;
  }
`;

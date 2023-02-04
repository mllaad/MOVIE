import styled from "styled-components";
import { breakpoint } from "../../assets/styles/breakpoint";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  padding: 4px 10px;
  margin: auto;
  display: flex;
  align-items: center;
  input {
    background-color: #1c1c1c;
    color: #646464;
    text-align: right;
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 10px;
  }
  span {
    position: absolute;
    top: 50%;
    left: 15px;
    color: white;
    cursor: pointer;
    transform: translate(50%, -50%);
  }
  ul {
    display: none;
  }
  .show {
    display: block;
  }
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #646464 !important;
      color: lightblue;
      cursor: pointer;
    }
  }
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
    margin: auto;
    ${breakpoint.tablet.small`font-size: 1.1rem;`}
  }
  .suggestion-active {
    color: lightblue;
    font-weight: bold;
  }
  .suggestions {
    position: absolute;
    right: 0;
    top: 110%;
    background-color: #1c1c1c;
    width: 100%;
    color: #646464;
    overflow: scroll;
    overflow-x: hidden;
    border: 1px solid #646464;
    height: 300px;
    text-align: right;
    padding: 5px;
    z-index: 20;
  }
  .no-suggestions {
    font-family: Shabnam;
    position: absolute;
    background-color: #1c1c1c;
    color: white;
    width: 100%;
    text-align: right;
    padding: 10px;
  }
  label {
    font-family: Shabnam;
    color: white;
    text-align: right;
    font-weight: 300;
    margin-left: 10px;
    min-width: 65px;
  }
`;

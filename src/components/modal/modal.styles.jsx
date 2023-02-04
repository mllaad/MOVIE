import styled from "styled-components";
import { MdOutlineCancel } from "react-icons/md";
import { breakpoint } from "../../assets/styles/breakpoint";

export const Main = styled.div`
  position: relative;
  width: 60%;
  ${breakpoint.tablet.large`width: 90%`}
  ${breakpoint.mobile.large`width: 90%;`}
  ${breakpoint.mobile.large`height: 250px;`}
  aspect-ratio: 16/9;
  background-color: white;
  display: flex;
  transition: transform 1s;
  transform: translateY(-200%);
  margin: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 30px 5px black;
`;

export const Contain = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #00000086;
  transition: all 0.5s ease-in-out;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
  z-index: 40;

  /* TOGGLES */
  &.show {
    opacity: 1;
    visibility: visible;
    transition: visibility 0s linear 300ms, opacity 300ms;
    z-index: 10;
    ${Main} {
      transform: translateY(0);
    }
  }
`;

export const CancelIcon = styled(MdOutlineCancel)`
  position: absolute;
  top: 0;
  right: 0;
  color: #000000;
  cursor: pointer;
  width: 40px;
  height: 40px;
  ${breakpoint.mobile.large`width:25px; height:25px;`}
  z-index: 20;
  pointer-events: stroke;
`;
export const Childrens = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  height: 100%;
`;

import styled from "styled-components";
import { TiSocialGooglePlus, TiSocialFacebook } from "react-icons/ti";
import { RiInstagramLine, RiReactjsFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { SiTwitch } from "react-icons/si";
import { AiOutlineCopyright } from "react-icons/ai";
import { breakpoint } from "../../assets/styles/breakpoint";

export const Container = styled.div`
  background-color: #1d1d1d;
  color: white;
  display: grid;
  grid-template-rows: 200px 1px 200px;
  > * {
    width: 70%;
    margin: auto;
  }
  ${breakpoint.mobile.standard`grid-template-rows: 100px 1px 100px;`}
  ${breakpoint.mobile.standard`>*{width : 95%;margin: auto;}`}
`;
export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #b2b2b2;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  ${breakpoint.tablet.standard`font-size: .6rem`}
  ${breakpoint.mobile.standard`font-size: .5rem`}
`;
export const Line = styled.div`
  height: 1px;
  background-color: #b2b2b2;
`;
export const SecondRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b2b2b2;
  ${breakpoint.mobile.standard`font-size: 1.5rem`}
  .group {
    display: felx;
    margin: 10px 0;
    > * {
      margin: 0 5px;
      &:hover {
        color: #e61c1c;
        border-color: #ffa6a6;
      }
    }
  }
`;
export const CopyRight = styled.div`
  background-color: black;
  display: flex;
  ${breakpoint.mobile.standard`font-size:.7rem`}
`;

///////// ICONS //////////
export const IconGoogle = styled(TiSocialGooglePlus)`
  font-size: 2.3rem;
  border: solid 1px #b2b2b2;
  border-radius: 100%;
  padding: 2px;
  ${breakpoint.mobile.standard`font-size: 1.5rem`}
`;
export const IconFacebook = styled(TiSocialFacebook)`
  font-size: 2.3rem;
  border: solid 1px #b2b2b2;
  border-radius: 100%;
  padding: 3px;
  ${breakpoint.mobile.standard`font-size: 1.5rem`}
`;
export const IconInstagram = styled(RiInstagramLine)`
  font-size: 2.3rem;
  border: solid 1px #b2b2b2;
  border-radius: 100%;
  padding: 4px;
  ${breakpoint.mobile.standard`font-size: 1.5rem`}
`;
export const IconTwitter = styled(IoLogoTwitter)`
  font-size: 2.3rem;
  border: solid 1px #b2b2b2;
  border-radius: 100%;
  padding: 5px;
  ${breakpoint.mobile.standard`font-size: 1.5rem`}
`;
export const IconTwitch = styled(SiTwitch)`
  font-size: 2.3rem;
  border: solid 1px #b2b2b2;
  border-radius: 100%;
  padding: 5px;
  ${breakpoint.mobile.standard`font-size: 1.5rem`}
`;
export const IconLogo = styled(RiReactjsFill)`
  font-size: 3rem;
  margin: auto;
  display: flex;
  ${breakpoint.mobile.standard`font-size: 2rem`}
  animation: rotation 10s infinite linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
export const IconCopyRight = styled(AiOutlineCopyright)`
  margin: auto;
`;

import styled from "styled-components";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { GiFullFolder, GiEarthAmerica } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaTheaterMasks } from "react-icons/fa";
import { breakpoint } from "../../assets/styles/breakpoint";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
export const IconClose = styled(IoClose)`
  font-size: 2rem;
  float: right;
`;
export const IconButton = styled(FiDownload)`
  color: white;
  font-size: 1.1rem;
  position: relative;
  z-index: 2;
  margin: auto;
  transition: 0.5s;
`;
export const IconCompany = styled(TbBuildingSkyscraper)`
  color: #eb8307;
  vertical-align: -5px;
  font-size: 1.2rem;
  margin-left: 5px;
`;
export const IconGenre = styled(GiFullFolder)`
  color: #eb8307;
  vertical-align: -5px;
  font-size: 1.2rem;
  margin-left: 5px;
`;
export const IconCountry = styled(GiEarthAmerica)`
  color: #eb8307;
  vertical-align: -5px;
  font-size: 1.2rem;
  margin-left: 5px;
`;
export const IconDirector = styled(IoPersonCircleOutline)`
  color: #eb8307;
  vertical-align: -5px;
  font-size: 1.2rem;
  margin-left: 5px;
`;
export const IconStars = styled(FaTheaterMasks)`
  color: #eb8307;
  vertical-align: -5px;
  font-size: 1.2rem;
  margin-left: 5px;
`;
export const IconModal = styled(BiMoviePlay)`
  color: #eb8307;
  font-size: 1.7rem;
  margin: auto;
  transition: color 0.5s;
`;


export const Wrapp = styled.div`
  z-index:0;
  padding: 20px 20px 0px;

  ${breakpoint.tablet.small`padding: 0; `}
  
  background-color: rgb(36, 36, 36);
  width: 70%;
  ${breakpoint.tablet.large`width: 90%;`}
  ${breakpoint.tablet.standard`width: 95%;`}
  margin:  15px auto 0; 
  color: white;
  display: grid;
  grid-template-columns: 70% 30%; 
  grid-template-rows: 420px;
  ${breakpoint.tablet.small`grid-template-rows:400px 600px; `}
  ${breakpoint.tablet.small` grid-template-columns: 100% ; `}
  position: relative;
  border-radius: 5px;
  padding-bottom:40px;

  .cover {
    grid-column: 2 / span 1;
    ${breakpoint.tablet.small`grid-column: 1 / span 1 `}
    justify-items: center;
    align-items: center;
    padding: 10px 10px;
    img {
      display: block;
      object-fit: cover;
      border-radius: 5px;
      width: 200px;
      height: 300px;
      aspect-ratio: 3 / 7;
      margin: auto;
      cursor: pointer;
      border: 2px #eb8307 solid;  
      transition: all 0.6s;
      &:hover {
        scale: 1.05
      }
    }
    .btn-modal {
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 15px;
      ${breakpoint.tablet.small`margin-top: 10px;`}
      background-color: #2d2d2d;
      width: 200px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border-radius: 10px;
      margin-top: 50px;
      &::after {
        position: absolute;
        content: "";
        right: -10px;
        bottom: -30px;
        rotate: 30deg;
        width: 80px;
        height: 100px;
        background-color: #1a1a1a;
        z-index: 1;
        transition: background-color 0.3s;
      }
      &:hover {
        .btn-modal__text {
          color: #eb8307;
        }
        ::after {
          background-color: #eb8307;
        }
        ${IconModal} {
          color: white;
        }
      }
      .btn-modal__text {
        font-family: Shabnam;
        color: white;
        transition: color 0.5s;
      }
      .btn-modal__icon {
        display: flex;
        z-index: 2;
        transition: color 0.5s;
      }
    }
  }

  // ARTICLE
  article {
    font-family: Shabnam;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    ${breakpoint.tablet.small`grid-row: 2 / span 1 `}
    ${breakpoint.tablet.small`grid-column: 1 / span 1 `}
    text-align: right;
    padding-right: 25px;
    ${breakpoint.tablet.small`padding: 0px 15px 0px 15px;`}
    z-index: 1;
    h2 {
      font-size: 1.1rem;
      padding-bottom: 30px;
    }
    .genre {
      font-size: 0.9rem;
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      & > * {
        margin-right: 5px;
      }
      & :first-child {
        margin-right: 0px !important;
      }
      & > *:hover {
        color: #eb8307;
        cursor: pointer;
      }
    }
    .director {
      font-size: 0.9rem;
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      & > *:hover {
        color: #eb8307;
        cursor: pointer;
      }
    }
    .stars {
      font-size: 0.9rem;
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      & > * {
        margin-right: 5px;
      }
      & :first-child {
        margin-right: 0px !important;
      }
      & > *:hover {
        color: #eb8307;
        cursor: pointer;
      }
    }
    .company {
      font-size: 0.9rem;
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      & > * {
        margin-right: 5px;
      }
      & :first-child {
        margin-right: 0px !important;
      }
      & > *:hover {
        color: #eb8307;
        cursor: pointer;
      }
    }
    .country {
      font-size: 0.9rem;
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      & > * {
        margin-right: 5px;
      }
      & :first-child {
        margin-right: 0px !important;
      }
      & > *:hover {
        color: #eb8307;
        cursor: pointer;
      }
    }

    // VOTE
    .advanced-vote {
      position: absolute;
      ${breakpoint.tablet.small`position: static;`}
      ${breakpoint.tablet.small`margin: auto;`}
      ${breakpoint.tablet.small`margin-top: 40px;`}
      ${breakpoint.tablet.small`padding-left: 10px `}
      ${breakpoint.mobile.standard`display: none `}
      
      top: 20px;
      left: 40px;
      font-size: 0.9rem;
      margin-top: 10px;
      width: 80px;
      text-align: center;
      .advanced-vote__vote-avrage {
        color: #eb8307;
        font-size: 1.3rem;
        font-weight: bold;
      }
      .advanced-vote__vote-base {
        ////
      }
      .advanced-vote__lines {
        width: 100%;
        height: 1px;
        background-color: #9191918b;
        margin-top: 5px;
      }
      .advanced-vote__vote-count {
        padding-top: 7px;
        font-size: 0.9rem;
      }
    }
    .overview {
      font-size: 0.9rem;
      margin-top: 30px;
    }
  }
  // BUTTON
  .advanced-card__btn {
    position: absolute;
    ${breakpoint.tablet.small`position : static `}
    ${breakpoint.tablet.small`margin: auto;`}
    bottom: 0;
    left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    height: 50px;
    &:hover {
      ${IconButton} {
        color: #eb8307;
        font-size: 1.3rem;
      }
    }
    .btn__title {
      color: white;
      font-family: Shabnam;
    }
    .btn__title--color {
      color: #eb8307;
      font-size: 1.1rem;
    }
  }

 
`;

export const  Modal = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0000009e;
    display: flex;
    .modal__container {
      background-color: #69696923;
      width: 60%;
      ${breakpoint.tablet.standard`width: 80%;`}
      ${breakpoint.mobile.large`width: 95%;`}
      margin: auto;
      aspect-ratio: 4/3;
      border-radius: 5px;
      .container__close-btn {
        color: white;
      }
      .iframe {
        width: 100%;
      }
      .iframe_container {
        width: 100%;
      }
    } 
 
`
export const PlayerContain = styled.div`
  width: 70%;
  ${breakpoint.mobile.standard`width: 90%`}
  background-color: #000000;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
`
export const NotFound = styled.div`
  margin: auto;
  font-size: 2rem;
  font-family: Shabnam;
`
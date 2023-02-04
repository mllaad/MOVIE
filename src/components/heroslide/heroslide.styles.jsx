import styled from "styled-components";
import { MdStar, MdHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";
import { breakpoint } from "../../assets/styles/breakpoint";
import { GiDramaMasks } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
export const HeroSlideEl = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
 
  .swiper {
    height: 100vh;
  }
  .swiper-wrapper {
  }
  .swiper-slide {
  }
  .swiper-pagination {
    background-color: rgba(0, 0, 0, 0.1);
    padding-top: 5px !important;
    width: 100% !important;
  }
  .swiper-pagination-bullet {
    background-color: none !important;
    border-radius: 5px !important;
    color: none !important;
    z-index: 100 !important;
    width: 100px !important;
    height: 60px !important;
    opacity: 0.3 !important;
    margin: 0 0px !important;
    transition: all 0.5s;
    ${breakpoint.tablet.large`width:70px !important; height: 40px !important;`}
  }
  .swiper-pagination-bullet-active {
    transform: scale(1.1);
    margin: 0 5px !important;
    opacity: 1 !important;
    position: relative;
    &::after {
      content: "" !important;
      position: absolute;
      top: 0px;
      width: 100px !important;
      height: 100px !important;
      background-color: red !important;
    }
  }
`;
export const Contain = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  position: relative;
  .background {
    z-index: -10;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100vh;
    background-position: center !important;
    background-size: cover !important;
    filter: brightness(90%) blur(3px);
  }
  .shadow-top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
  }
  .shadow-bot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0.4) 40%,
      rgba(0, 0, 0, 0.6) 60%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const Container = styled.div`
  font-family: Shabnam;
  width: 70%;
  height: 100%;
  padding: 120px 0;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: flex-start;
  ${breakpoint.tablet.xlarge`width: 75%`}
  ${breakpoint.tablet.large`width:90%; height: 80%;`}
  ${breakpoint.tablet.small`display:block; padding: 50px 0px`} 
  ${breakpoint.mobile.standard`width:95%;`}   
    
  &.active > div {
    transform: scale(1);
  }
  &.active > div > div {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const Content = styled.div`
  z-index: 10;
  padding: 0px 30px;
  text-align: right;
  color: white;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row-gap: 10px; 
  margin: auto;
  ${breakpoint.mobile.large`width: 90%; padding: 0`}
`;
export const Img = styled.div`
  transition: 1s;
  cursor: pointer;
  box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 40%);
  transform: scale(0);
  height: 100%;
  border-radius: 4px;
  ${breakpoint.tablet.small` width :150px; height: 225px;  margin: auto`}

  img {
    object-fit: contain;
    height: 100%;
    border-radius: 4px;
  }
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  padding: 10px 0;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  ${breakpoint.tablet.large`font-size:1.2rem`}
 
`;
export const List = styled.div`
  display: flex;
  padding: 10px 0px;
 
  direction: rtl;
  opacity: 0;
  transform: translateY(-100px);
  ${breakpoint.mobile.standard`font-size:0.7rem;`}
  ${breakpoint.mobile.standard`padding: 4px 0px;`}
  ${(props) =>
    `  transition: transform ${props.time} ease, opacity ${props.time} ease;`}

    div {
      margin-right: 10px;
    }
`;
export const DateRelease = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  direction: rtl;
  display: flex;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  ${breakpoint.tablet.large`font-size:1rem`}
`;
export const Vote = styled.div`
  font-family: Shabnam;
  direction: rtl;
  display: flex;
`;

export const Genres = styled.div`
  font-weight: 500;
  display: flex;
  direction: rtl;
  margin-top: 5px;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  transition-delay: 0.3s, 0.3s;
`;
export const Genre = styled(Link)`
  margin-right: 6px;
  text-decoration: none;
  color: white;
  ${breakpoint.tablet.large`font-size: .9rem;`}
  ${breakpoint.tablet.standard`font-size: .77rem`}    
&:hover {
    color: rgb(235, 131, 7);
  }
`;
export const OverView = styled.div`
  margin-top: 15px;
  opacity: 0;
  direction: rtl;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  transition-delay: 0.6s, 0.6s;
  font-size: 0.9rem;
  ${breakpoint.tablet.large`display:none;`}
  
`;

export const Btns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;
  opacity: 0;
  transform: translateY(-100px);
  transition: transform 0.5s ease, opacity 0.5s ease;
  transition-delay: 0.6s, 0.6s;
  .red {
    width: 48%;
    text-align: center;
    padding: 12px 0;
    border-radius: 30px;
    margin-top: auto;
    background-color: #ff0000;
    box-shadow: 0px 0px 8px 5px rgba(255, 0, 0, 0.5);
    transition: 0.4s all;
    &:hover {
      box-shadow: 0px 0px 8px 10px rgba(255, 0, 0, 0.5);
    }
  }
  .bg-none {
    width: 48%;
    text-align: center;
    padding: 12px 0;
    border-radius: 30px;
    margin-top: auto;
    color: white;
    border: 3px solid white;
    &:hover {
      transition: 0.5s;
      color: red;
      background-color: white;
    }
  }
`;
export const Btn = styled(Link)`
  .red {
    background-color: white !important;
  }

  ${breakpoint.tablet.large`padding: 9px 0px;`};
`;

/////// ICONS //////
export const StarIcon = styled(MdStar)`
  font-size: 1.5rem;
  color: #eb8307;
  /* margin: auto; */
  vertical-align: bottom;
  ${breakpoint.tablet.large`font-size:1.4rem !important`}
  ${breakpoint.mobile.standard`font-size: 1rem !important`}
`;
export const ViewIcon = styled(MdHowToVote)`
  font-size: 1.5rem;
  color: #eb8307;
  vertical-align: bottom;
  ${breakpoint.tablet.large`font-size:1.4rem !important`}
  ${breakpoint.mobile.standard`font-size: 1rem !important`}
`;
export const GenreIcon = styled(GiDramaMasks)`
  font-size: 1.5rem;
  color: #eb8307;
  vertical-align: bottom;
  ${breakpoint.tablet.large`font-size:1.4rem !important`}
  ${breakpoint.mobile.standard`font-size: 1rem !important`}
`;
export const DateIcon = styled(BsCalendar2Date)`
  font-size: 1.5rem;
  color: #eb8307;
  vertical-align: bottom;
  ${breakpoint.tablet.large`font-size:1.4rem !important`}
  ${breakpoint.mobile.standard`font-size: 1rem !important`}
`;

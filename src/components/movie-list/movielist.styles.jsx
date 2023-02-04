import styled from "styled-components";
import { breakpoint } from "../../assets/styles/breakpoint";
import { MdOutlineReadMore } from 'react-icons/md'
export const Container = styled.div`
background-color: black;
width: 90%;
padding-top: 50px;
margin: auto;

    .swiper {
        
        .swiper-wrapper {
        }
        .swiper-slide{
            width: 15%;
            ${breakpoint.tablet.large`width:20%;`}
            ${breakpoint.tablet.standard`width:30%;`}
            ${breakpoint.mobile.large`width:40%;`}
            ${breakpoint.mobile.standard`width:45%;`}
            cursor:grab;
        }
    }
`

export const Header = styled.div`
    z-index: 2;
    border-radius: 10px;
    font-family: Shabnam;
    font-size: 2rem;
    font-weight: 600;
    text-align: right;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    position: relative;
    ${breakpoint.tablet.standard`font-size:1.5rem`}
    ${breakpoint.mobile.standard`font-size:1rem`}
    
    ::before{
        content: "";
        z-index: -1;
        position: absolute;
        bottom:10px;
        right: -5%;
        width: 60%;
        border-radius: 10px;
        height: 70%;
        ${breakpoint.mobile.standard`height: 55%; bottom:10px;`}
        background-image: linear-gradient(to right, rgba(1,1,1,0), rgba(255,0,0,.8));
        overflow: hidden;
    }
    button{
        font-family: Shabnam;
        background: none;
        cursor: pointer;
        color: white;
        font-size: 1.1rem;
        font-weight: 400;
        border: 2px solid white;
        border-radius: 10px;
        width: 100px;
        height: 80%;
        ${breakpoint.mobile.standard`height: 50%; font-size: .8rem; width: 70px; padding: 1px 0px`}
        padding: 3px 0px;
        transition: .5s all;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover{
            background-color: white;
            color: red;
        }
    }
`

export const IconMore = styled(MdOutlineReadMore)`
    font-size:1.4rem;
    ${breakpoint.mobile.standard`font-size: 1rem;`}
    margin-right: 3px;
`
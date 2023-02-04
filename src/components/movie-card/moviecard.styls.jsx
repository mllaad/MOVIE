import styled from "styled-components";
import {MdPlayCircleFilled} from 'react-icons/md'
import { breakpoint } from "../../assets/styles/breakpoint";
export const SubTitle = styled.div`
    color: white;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.1rem;
    ${breakpoint.tablet.large`font-size: 0.8rem`}
    transition: color .5s;
    text-align:center;
    padding-top: 6px;
`

export const IconPlay = styled(MdPlayCircleFilled)`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) scale(0);
    font-size: 2.5rem;
    color: red;
    z-index: 10;
    background-color: white;
    box-shadow: 0px 0px 8px 5px rgba(255,	0,	0, 0.5);
    border-radius: 100%;
    transition: .5s all;
    &:hover {
        box-shadow: 0px 0px 8px 10px rgba(255,	0,	0, 0.5);
    }
`
export const Card = styled.div`
    background: url(${props => props.bg});
    position: relative;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 160%;
    border-radius: 35px;
    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(1,1,1,.7);
        opacity: 0;
        transition: opacity .3s ;
        border-radius: 35px;
    }

    @media (hover: hover){
        &:hover::before {
            opacity: 0.9;
        }
        &:hover ${IconPlay} {
            transform: translate(50%, -50%) scale(1)
        }
        &:hover ~ *{
            color: red ;
        }
        
    }

    
`





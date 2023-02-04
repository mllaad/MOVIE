import styled from "styled-components";
import {BiSearch} from 'react-icons/bi'
import {breakpoint} from '../../assets/styles/breakpoint'
import {MdOutlineDateRange, MdStar, MdHowToVote } from 'react-icons/md'



export const Container = styled.div`
    width: 100%;    
    position: relative;
`

export const SearchFields = styled.div`
    position: absolute;
    /* top: 105%; */
    left: 10px;
    background-color: rgba(80, 80, 80, 0.8);
    box-shadow: 1px 2px 10px 1px rgba(13, 13, 13, 0.8);
    width: 100%;
    height: 200px;
    color: white;
    overflow: scroll;
    overflow-x: hidden;
    border-radius:5px;
    height: 0px;
    opacity: 0;
    transition: .5s all;
::-webkit-scrollbar {
  width: .5rem;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(44, 44, 44, 0.3);
}
::-webkit-scrollbar-thumb {
  height: 10px;
  background-color: #dfdfdf;
  outline: 1px solid slategrey;
  border-radius:1px;
}
`

export const Form = styled.form`
    position: relative;
    /* overflow: hidden; */
    height: 42px;
    ${breakpoint.mobile.standard`height: 43px`};   
    
    input {
    width:330px;
    height: 42px;
    font-size: .9rem;
    background: #242424;
    border: #050505;
    color: #898989;
    border-radius: 35px;
    padding: 0 10px 0 50px;
    ${breakpoint.tablet.standard`width: 100%;`};
    ${breakpoint.mobile.standard`width: 250px;`};
    :focus ~ div {
        height: 250px;
        opacity: 1;
    }
    }
    button {
        position: absolute;
        left: 15px;
        top: 57%;
        transform: translateY(-50%);
        background: inherit;
        border: none;
    }
`



export const IconSearch = styled(BiSearch)`
    font-size: 1.3rem;
    color: #eb8307;
`

export const Wrap = styled.li`
    width: 100%;
    height: 150px;
    list-style: none;
    display: flex;
    justify-content: flex-end;
`
export const AutoComplete = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    background-color: #0000007f;
    text-align: right;
    transition: background-color .5s;
    padding:10px 5px;
    ${breakpoint.mobile.standard`padding: 10px 0px;`}
    :hover {
        background-color:#010101;
    }
    img{
        width: 100px;  
        height: 100%;
    }

`
export const Info = styled.div`
    width: 100%;
    div{
        text-align: right;
    }
    h2{
        font-size: 1.5rem;;
    }
    h4{
        display: flex;
        justify-content: end;
    }
    .flex {
        display: flex;
    }
`
export  const IconDate = styled(MdOutlineDateRange)`
    color:#30ff5a;
    font-size:1.3rem;
    vertical-align:-2px;
`
export const IconStar = styled(MdStar)`
    color: yellow;
    font-size:1.3rem;
    vertical-align:-2px;
`
export const IconVote = styled(MdHowToVote)`
    color: green;
    font-size:1.3rem;
    vertical-align:-2px;
`


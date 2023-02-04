import styled from "styled-components";
import {IoMdArrowDropdown} from 'react-icons/io';
import {BiMovie,BiTv} from 'react-icons/bi'
import {breakpoint} from '../../assets/styles/breakpoint'

export const Grid = styled.div`
    position: relative;
    padding-top: 80vh;
    .background{
        position: absolute;
        top: 0;
        width: 100%;
        height: 80vh;
        background-position:center;
        background-repeat: no-repeat;
        background-size:cover;
        background-color: black;
        &::after{
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            width: 100%;
            height:10vh;
            /* background-color: black; */
            background-image: linear-gradient(to bottom, rgba(1,1,1, 0), rgba(1,1,1, 1))
        }
    }
    .dropdown{
        position: absolute;
        top: -370px;
        right: 200px;
        background-color: red !important;
        z-index: 10 !important;
        ${breakpoint.mobile.large`right:170px`}
        display:flex;
        align-items:center;
    }
    .title{
        font-family: Shabnam;
        background-color: black;
        color:white;
        padding: 8vh 0px 4vh 0px;
        width: 100%;
        text-align: center;
        font-size: 2rem;
        ${breakpoint.mobile.large`text-align:left; padding-left:20px`}
        display:flex;
        justify-content:center;
        align-items: center;
        margin: auto;
    }
    .grid {
        position: relative;
        background-color: black;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
        gap: 1rem;
    }
`

export const Dropdown = styled.div`
    position: absolute;
    top: 300px; 
    font-family: Shabnam;
    text-align: right;
    padding:5px;
    width: 163px;
    .dropdown-select{
        color: #969696;
        cursor:pointer;
        border: 1px solid #000000;
        padding:5px 3px;
        border-radius: 4px;
        margin: auto;
        width: 140px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-around;
        &:hover {
            color:#cacaca;
            border: 1px solid #363636;
        }
    }
    .dropdown-items{
        padding: 10px 25px 10px 0px;
        width: 163px;
        background-color: red;
        display: none;
        color: #969696;
        background-color:#1b1b1b;
        margin-top:10px;
        cursor: pointer;

    }
    .show{
            display: block;
        }
    .dropdown-item {
        padding: 5px 0px;
        &:hover{
            font-size:1.05rem;
            color:#cacaca;
            
        }
    }
`
export const LoadMoreBtn = styled.div`
    text-align: center;
    background-color: black;
    padding-top:100px;
    .load-more {
        font-family: Shabnam;
        background-color: #2b2b2b;
        font-size:2rem;
        border: none;
        padding:10px 20px;
        border-radius:5px;  
        cursor:pointer;
        transition: all .5s;
        &:hover{
            color:red;
            box-shadow: 1px 1px 20px 1px white;
        }
    }
    .grid__pagination {
      width: 270px;
      /* height: 100px; */
      margin: auto;
      display: flex;
      justify-content: space-between;
      background-color: white;
      .page-link {
        padding:5px 0px;
        width: 35px;
        border-radius: 4px;
        
        background-color: red;
      }
      .active {
        background-color: green;
      }
    }
`

export const IconArrow = styled(IoMdArrowDropdown)`
    font-size: 1.3rem;
    vertical-align: -8px;
    color: white;
`
export const IconMovie = styled(BiMovie)`
    vertical-align: -5px;
    color:red;
`
export const IconSeries = styled(BiTv)`
    vertical-align: -5px;
    color:red;
`
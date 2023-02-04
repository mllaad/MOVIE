import styled from "styled-components";
import {BiSearch} from 'react-icons/bi'
import {breakpoint} from '../../assets/styles/breakpoint'

export const Grid = styled.div`
position: relative;
padding-top:50vh;
background-color: #000000;

.background {
    position: absolute  ;
    width: 100%;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    margin-top:-100vh;
    ${breakpoint.mobile.standard`
    background-size:cotain; 
    background-position:20% 75%;
    margin-top:-600px;
    `}
    &::after{
        content:"";
        position: absolute;
        bottom: 0;
        width: 100%;
        height:30%;
        background-image: linear-gradient(
        to bottom,  
        rgba(1,1,1,.1) 10%, 
        rgba(1,1,1,1) 90%
        );
    };
};
h2 {
    font-family:Shabnam;
    text-align: center;
    padding:50px 0px;
    background-color: black;
    color:white;
    cursor: default;
    display:flex;
    align-items: center;
    justify-content:center;
}
.grid-section {
    position:relative;
    padding:10px;
    display: grid;
    text-align: center;
    margin: auto;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}
`
export const SearchInput = styled.div`
    margin-bottom: 100px;
    width: 40%;
    ${breakpoint.tablet.standard`width: 80%;`}
    margin: auto;
    padding-bottom: 30px;
    height: 60px;
    position: absolute;
    top:250px;;
    right: 50%;
    transform: translate(50%,-50%);
    border-radius: 10px;
    input{
        width: 100%;
        height: 50px;  
        outline:none; 
        margin: auto;
        transition: .5s all;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        padding: 0 30px;
        background-color: #d7d7d7;
        border-radius: 50px;
        border: 2px solid #5c5c5c;
 
    }
    input:focus ~ label{
        color: #eb8407d1;
    }
    input:focus {
        box-shadow: 1px 1px 30px 2px #ffffffa6;
    }
    label{
        width: 100%;
        height: 100%;
        position: absolute;
        top: -130%;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        color: white;
        transition: color .1s;
        font-family:Shabnam;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }   
    
`
export const LoadMoreBtn = styled.div`
    text-align: center;
    background-color: black;
    padding-top:10px;
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
export const IconSearch = styled(BiSearch)`
    margin-right:8px;
    margin-top: 10px;
    font-size:2rem;
    color: #eb0707d1;
`



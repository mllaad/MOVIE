import { Link } from "react-router-dom";
import styled from "styled-components";


export const Block = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #232323;
    color: #8a4747;
    padding-top:10px;
    text-align: center;
`
export const Back = styled(Link)`
    margin:50px auto;
    display: grid;
    font-size:1rem;
    width: 300px;
    text-transform:uppercase;
    padding:5px 10px;
    border-radius:5px;
    background-color:#9f9f9f;
    
`
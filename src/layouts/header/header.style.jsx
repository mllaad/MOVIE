import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { TbHome } from 'react-icons/tb'
import { GiFilmProjector } from 'react-icons/gi'
import { FiMonitor } from 'react-icons/fi'
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';
import { breakpoint } from '../../assets/styles/breakpoint'
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {BiSearch} from 'react-icons/bi'
export const HeaderEl = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    padding: 30px 0;
    background: rgba(34, 34, 34, 0.5);
    box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 40%);
    transition: 1s;
    ${breakpoint.tablet.standard`padding:5px 0px;`}
    /* ${breakpoint.tablet.standard`height:;`} */
    ${breakpoint.mobile.standard`padding:10px 0px;`}
    &.active {
        padding: 5px 0;
        background: #000000;
    }
`
export const Container = styled.div`
    width: 85%;
    ${breakpoint.tablet.large`width: 90%;`}
    ${breakpoint.mobile.standard`width: 100%;`}
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    ${breakpoint.tablet.standard`flex-direction: column-reverse;`}
    ${breakpoint.tablet.standard`height:auto`}
    ${breakpoint.mobile.standard`height:50px`}
    ${breakpoint.mobile.standard`flex-direction: row;`}
    ${breakpoint.mobile.standard`padding:0 15px;`}
 
`
export const LinkName = styled.div`
    width: 55px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    font-size:0.86rem;
    font-weight: 400;
    text-transform: uppercase;
    white-space:nowrap;
    color:#eb8307;
    transition: .7s;
    overflow: hidden; 
    transition: all 1s ;
    opacity: 1;
    &:hover ~ * {
        transform:scale(1.3)
    }
    .white {
        color:white;
        font-weight: 400;
    }
`
export const NavLinks = styled.div`
    width: inherit;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${breakpoint.tablet.standard`margin:5px auto;`}
    ${breakpoint.mobile.standard`display: none;`}
    .active {
       ${LinkName} {
        width: 0px;
        opacity:0;
       }
    }
    
`

export const NavLink = styled(Link)`
    font-family: Shabnam;
    text-align: end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: width 10s !important;
    position: relative;

`


export const Wrapper = styled.div`
    position: absolute;
    top:0;
    right: 0;
    height: 400px;
    z-index: 11;
    transition: all .5s;
    background-color: #000000;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 1px 0px 7px .5px rgb(0 0 0 / 100%);
    ${props => props.toggle ? `width: 70%;` : `width:0px; padding:0px; margin-right:-5px;`}
`
export const LogoHolder = styled(Logo)`
    width: 100px;
    height: 100px;
    display: block;
    margin: auto;
    margin-bottom: 30px;
    border-radius:100%;
`
export const Navs = styled(Link)`
    width: 100%;
    text-align: end;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,.1);
    margin-bottom:5px;

   
`

export const Name = styled.div`
    color:#eb8307;
    font-size:0.86rem;
    font-weight: 400;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45px;
    overflow: hidden;
    transition: .7s;
    width: 60px;
    white-space:nowrap;
    &:hover ~ * {
        transform:scale(1.3)
    }
    .white {
        color:white;
        font-weight: 400;
    }
    &.active {
        padding: 5px 0;
        background: #d40000;
    }
`
//// ICONS
export const IconHome = styled(TbHome)`
    font-size:2rem;
    margin: auto 6px;
    color:#eb8307;
    transition-duration: .5s;
    &:hover {
        transform:scale(1.2)
}
`
export const IconFilm = styled(GiFilmProjector)`
    font-size:2rem;
    margin: auto 6px;
    color:#eb8307;
    transition-duration: .5s;
    &:hover {
        transform:scale(1.2)
}
`
export const IconSeries = styled(FiMonitor)`
    font-size:2rem;
    margin: auto 6px;
    color:#eb8307;
    transition-duration: .5s;
    &:hover {
        transform:scale(1.2)
}
`
export const IconSearch = styled(BiSearch)`
       font-size:2rem;
    margin: auto 6px;
    color:#eb8307;
    transition-duration: .5s;
    &:hover {
        transform:scale(1.2)
}
`
export const MobileMenu = styled(Hamburger)`
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: #000000;
    padding:5px 10px;
    border-radius: 5px;
    color:white;
    display: none;
    ${breakpoint.mobile.standard`display:block;`}
`
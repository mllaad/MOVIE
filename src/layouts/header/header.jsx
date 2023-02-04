import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../components/searchbar/searchbar";

import {
    HeaderEl,
    Container,
    NavLinks,
    NavLink,
    LinkName,
    Wrapper,
    Navs,
    Name,
    IconHome,
    IconFilm,
    MobileMenu,
    IconSeries,
    IconSearch,
    LogoHolder,
} from './header.style'
import { useEffect } from "react";

const header = [
    {farsi: 'جستجو', english: 'search', id: 'search', icon: <IconSearch/>},
    {farsi: 'سریال ها', english: 'series', id: 'tv', icon: <IconSeries/>},
    {farsi: 'فیلم ها', english: 'movies', id: 'movie', icon: <IconFilm/>},
    {farsi: 'خانه', english: 'home', id: '/', icon: <IconHome/> }
]

const Header = () => {
    const refHeader = useRef(null)
    const refNavLink = useRef(null)

    const scrollHandler = () => {
        if(!refNavLink.current || !refHeader.current) return
        const nav = refNavLink.current.children
        const header = refHeader.current

        const scroll = document.documentElement.scrollTop
       
        if(scroll > 100) {
            Array.from(nav).forEach(e => e.classList.add('active'))
            header.classList.add('active')
        } else {
            Array.from(nav).forEach(e => e.classList.remove('active'))
            header.classList.remove('active')
        }
    }
    useEffect(()=> {
        window.addEventListener('scroll', scrollHandler)
        return (()=> window.removeEventListener('scroll', scrollHandler))
    },[])
 
    const [isShow, setIsShow] = useState(false)
    const menuHandler = () => {
        // when clicked outside of menu
        const clickHandle = (e) => {
            const matchId = e.composedPath().some((element)=> element.id === 'menu')
            if(matchId) return;
            setIsShow(false)
            document.removeEventListener('click', clickHandle)
        }
        // when clicked on menu
        setIsShow(true)
        document.addEventListener('click', clickHandle)
    }

    return (
        <>
        <HeaderEl ref={refHeader}>
            <MobileHeader toggle={isShow}/>  
            <Container>
                <SearchBar/>
                <MobileMenu onClick={menuHandler} id='menu'/>{/*breakpoint,display: one;*/}
                <NavLinks ref={refNavLink}>
                    {header.map((item, i) => <Nav  key={i} item={item}/>)}
                </NavLinks>
            </Container>   
        </HeaderEl>
        <Outlet/>
        </>
    )
}

const Nav = ({item}) => {
 return (
    <NavLink to={item.id} id={item.id} >
    <LinkName>
        <span className="white">{item.farsi}</span>
        <span>{item.english}</span>
    </LinkName>
    {item.icon}
    </NavLink>
 )
}

const MobileHeader = ({toggle}) => {

    return (
        <Wrapper toggle={toggle} id='menu'>
            <LogoHolder/>
            {header.map((item, i) => {
                return (
                    <Navs key={i} to={item.id} id={item.id}>
                    <Name>
                        <span className="white">{item.farsi}</span>
                        <span>{item.english}</span>
                    </Name>
                    {item.icon}
            </Navs>
                )
            } )}
        </Wrapper>
    )
}


export default Header;
import { useState, useRef } from "react";
import { tmdbList } from "../../api/axios";
import { toFarsi } from '../../api/tofaris'
import { useListInGrid} from "./custom-hooks";
import MovieCard from '../../components/movie-card/moviecard'
import { unsplashAPI } from "../../api/unsplash";
import {    
    Grid,
    Dropdown,
    LoadMoreBtn,
    IconArrow,
    IconMovie,
    IconSeries,
} from './grid-media.styles'
import { useGetBackground } from "../../utility/usegetbackground";
const GridMedia = ({category}) => {
    const movie = category === 'movie' ? true : false

    // SETUP SELECT
    const type = tmdbList[category]
    const arrayType = Object.values(type)
    const [select, setSelect] = useState(arrayType[0])

    /// PAGE 
    const [page, setPage] = useState(1)

    // CUSTOM HOOK
    const media = useListInGrid(category, type[select], page)

    
    const unsplashApi = movie ? unsplashAPI.cinemaOne() : unsplashAPI.netflix()
    const background = useGetBackground(unsplashApi)
    
    
    return (
        <Grid>
            <div className="background" style={{backgroundImage: `url(${background.image})`}}/>
            <h2 className="title"> {movie ? <IconMovie/> : <IconSeries/>}{toFarsi[category]}</h2>
            <div className="grid">
                <div className="dropdown">
                <DropDown 
                items={arrayType} 
                setSelect={setSelect} 
                select={select} 
                />  
                </div>
                {media.map((item, i)=><MovieCard key={i} result={item} category={category}/>)}
            </div>
             <LoadMore onClick={() => setPage(page => page + 1)}/>
        </Grid>
    )
}

const DropDown = ({items, select, setSelect, className}) => {
    const dropDown = useRef(null)
    const handleDropDwon = () => dropDown.current.classList.toggle('show')
    
    return (
        <Dropdown className={className}>
            <div className="dropdown-select" onClick={handleDropDwon}>
                {toFarsi[select]}<IconArrow/>
            </div>
            <div className="dropdown-items" ref={dropDown}>
                {items.map((item, i) => 
                <DropDownItems 
                key={i} 
                item={item} 
                setSelect={setSelect} 
                dropDown={dropDown}
                />)}
            </div>
        </Dropdown>
    )
}

const DropDownItems = ({item, setSelect, dropDown}) => {
    function handleSelect(){
        setSelect(item)
        dropDown.current.classList.remove('show')
    }
    return (
        <div 
        onClick={handleSelect}   
        className='dropdown-item'>{toFarsi[item]}
        </div> 
    )
}

const LoadMore = ({onClick}) => {
    return (
            <LoadMoreBtn>
                <button className='load-more' onClick={onClick ? onClick : null}>
                    ...بیشتر
                </button>
            </LoadMoreBtn>
    )
}
export default GridMedia;
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { toFarsi } from "../../api/tofaris";
import { useGetList } from '../../utility/usegetlist';
import MovieCard from "../movie-card/moviecard";

import {
Container,
Header,
IconMore,
} from './movielist.styles'

const MovieList = ({category, type }) => {
    const navigate = useNavigate()
  
    const results = useGetList(category, type)

    if(!results) return
    return (
        <Container>
            <Header>
                <button onClick={() =>navigate(`grid-template/${category}`)}><IconMore/>بیشتر</button>
                <div>{toFarsi[category]}: {toFarsi[type]}</div>
            </Header>
            <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            >
            {
            results.map((result, i) => (
                <SwiperSlide key={i}><MovieCard result={result} category={category}/></SwiperSlide>
            ))}
            </Swiper>
        </Container>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default MovieList;
import { axiosClient, tmdbList } from "../../api/axios";

import { HomeEl, Container } from "./home.styles";
import HeroSlide from "../../components/heroslide/heroslide";
// import MovieList from "../../components/movie-list/movielist";
import SwiperActors from "../../components/swiper-actor/swiper-actor";
import { useEffect, useState, Suspense, lazy } from "react";

const MovieList = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../../components/movie-list/movielist")),
      2000
    );
  });
});

const MovieList_ = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../../components/movie-list/movielist")),
      4000
    );
  });
});

const Home = () => {
  const useGetActors = () => {
    const [list, setList] = useState(Array);

    useEffect(() => {
      axiosClient
        .get("/trending/person/day")
        .then((res) => setList(res.results))
        .catch(() => console.error("cant catch data"));
    }, []);
    return list;
  };
  const actors = useGetActors().filter((_, indx) => indx < 4);

  return (
    <HomeEl>
      <HeroSlide />
      <Container>
        <SwiperActors actors={actors}> trending </SwiperActors>
        <Suspense fallback={<div>Loading</div>}>
          <MovieList
            category={tmdbList.category.tv}
            type={tmdbList.tv.popular}
          />
          <MovieList
            category={tmdbList.category.movie}
            type={tmdbList.movie.popular}
          />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <MovieList_
            category={tmdbList.category.tv}
            type={tmdbList.tv.top_rated}
          />
          <MovieList_
            category={tmdbList.category.movie}
            type={tmdbList.movie.top_rated}
          />
        </Suspense>
      </Container>
    </HomeEl>
  );
};

export default Home;

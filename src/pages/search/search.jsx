import { useState } from "react";
import { useSearchList } from "./custom-hooks";
import MovieCard from "../../components/movie-card/moviecard";
import LoadRoller from "../../components/load-roller/load-roller";
import { Grid, IconSearch, LoadMoreBtn, SearchInput } from "./search.styles";
import { useSelector } from "react-redux";
import { useGetBackground } from "../../utility/usegetbackground";
import { unsplashAPI } from "../../api/unsplash";

const Searsh = () => {
  const background = useGetBackground(unsplashAPI.netflix());

  const inputFromHeaderSearch = useSelector((state) => state.search.input);
 
  const [keyword, setKeyword] = useState(inputFromHeaderSearch);
  const [page, setPage] = useState(1);

  const { results, status } = useSearchList(keyword, page);
 
  // DEBOUNCE
  const [timeout, getTimeout] = useState(null);
  const debounce = (cb, time = 700) => {
    clearTimeout(timeout);
    getTimeout(setTimeout(() => cb(), time));
  };
  function onInput(e) {
    debounce(() => {
      if (!e.target.value) return;
      setKeyword(e.target.value);
    });
  }
  const isLoad = status === "null" ? true : false;

  return (
    <Grid>
      <div
        className="background"
        style={{ backgroundImage: `url(${background.image})` }}
      />
      <SearchInput>
        <input type="text" onChange={onInput} placeholder="چیزی تایپ کن" />
        <label>
          {" "}
          <IconSearch /> جستجو{" "}
        </label>
      </SearchInput>
      <div className="grid-section">
        {results.length ? (
          results.map((result, i) => <MovieCard key={i} result={result} />)
        ) : (
          <LoadRoller status={status} />
        )}
      </div>
      {results.length && (
        <LoadMore onClick={() => setPage((page) => page + 1)} />
      )}
    </Grid>
  );
};

const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtn>
      <button className="load-more" onClick={onClick ? onClick : null}>
        ...بیشتر
      </button>
    </LoadMoreBtn>
  );
};

export default Searsh;

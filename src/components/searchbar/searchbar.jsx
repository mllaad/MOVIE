import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { axiosConfig } from "../../api/axios";
import { toFarsi } from "../../api/tofaris";
import { setSearchInput, getSearch } from "../../features/search/search";
import {
  Container,
  Form,
  IconSearch,
  SearchFields,
  Wrap,
  AutoComplete,
  Info,
  IconDate,
  IconStar,
  IconVote,
} from "./searchbar.styled";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // DEBOUNCE
  let [timeout, getTimeout] = useState(Number);
  const debounce = (cb, time = 700) => {
    clearTimeout(timeout);
    getTimeout(setTimeout(() => cb(), time));
  };
  const chageHandle = (e) => {
    debounce(() => {
      if (e.target.value) {
        const params = { query: e.target.value };
        dispatch(getSearch({ params }));
      }
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    navigate("/search");
    // INPUT IS FRIST ELEMENT ON ITS PARENT
    const input = e.target[0].value;
    dispatch(setSearchInput(input));
  };
  const search = useSelector((state) => state.search.results);

  return (
    <Container>
      <Form onSubmit={submitHandle}>
        <input
          type="text"
          name="search"
          onChange={chageHandle}
          autoComplete="off"
        />
        <SearchFields>
          {search.map((item, i) => (
            <AutoCompoleteSearch key={i} search={item} />
          ))}
        </SearchFields>
        <button type="submit">
          <IconSearch />
        </button>
      </Form>
    </Container>
  );
};

const AutoCompoleteSearch = ({ search }) => {
  const navigate = useNavigate();

  const {
    media_type,
    id,
    backdrop_path,
    poster_path,
    title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    vote_count,
    profile_path,
  } = search;
  const link =
    media_type === "person"
      ? media_type + "/" + id
      : `/detail/${media_type}/${id}`;
  
  const src = poster_path || backdrop_path || profile_path;
  
  const name = title || original_name;
  const date = release_date || first_air_date;

  function clickHandle() {
    navigate(link);
  }

  if (src)
    return (
      <Wrap onClick={clickHandle}>
        <AutoComplete>
          <img src={axiosConfig.imgw500(src)} alt={name} />
          <Info>
            <div>
              <h2>
                {name} : {toFarsi[media_type]}
              </h2>
              <h4>
                {date} <IconDate />
              </h4>
              <h4>
                {vote_average}
                <IconStar /> {vote_count}
                <IconVote />
              </h4>
            </div>
          </Info>
        </AutoComplete>
      </Wrap>
    );
};

export default SearchBar;

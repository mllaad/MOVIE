import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { company } from "../../api/discover";
import { unsplashAPI } from "../../api/unsplash";
import AutoComplete from "../../components/autocomplete/autocomplete";
import AdvancedCard from "../../components/advanced-card/advanced-card";
import LoadRoller from "../../components/load-roller/load-roller";
import SliderRangeVote from "../../components/slider-range-vote/slider-range-vote";
import SliderRangeDate from "../../components/slider-range-date/slider-range-date";
import { useGetDiscover, useGetImage } from "./useserie";
import {
  Section,
  PageTitle,
  SearchBox,
  SearchPic,
  IconMovie,
  Grid,
  Background,
  Title,
  Button,
} from "./serie.styles";
import PaginationBar from "../../components/pagination-bar/pagination-bar";

const Serie = () => {
  const image = useGetImage(unsplashAPI.netflix());
  const genre = useSelector((state) => state.tmdb.genreList);

  // PARAMS
  const [params, setParmas] = useState({});

  const [withCompany, setWithCompany] = useState("");
  const [withGenre, setWithGenre] = useState("");
  const [person, setPerson] = useState("");
  const voteGt = useRef(null);
  const voteLt = useRef(null);
  const dateGt = useRef(null);
  const dateLt = useRef(null);
  /////

  ////
  // SEARCH BUTTON
  function clickSearchHandle() {
    const getRef = (ref) => ref.current.innerText;
    const check = (arg) => (arg.id == null ? "" : arg.id);

    // PARAMS
    const param = {
      with_companies: check(withCompany),
      with_genres: check(withGenre),
      // with_people: check(person),
      "vote_average.lte": getRef(voteGt),
      "vote_average.gte": getRef(voteLt),
      // "primary_release_date.lte": getRef(dateGt),
      // "primary_release_date.gte": getRef(dateLt),
    };
    setParmas(param);
  }
 
  const { results, currentPage, totalPage, status } = useGetDiscover(
    "tv",
    params
  );
 
 
  return (
    <Section>
      <Background bg={image} />
      <PageTitle>
        {" "}
        <IconMovie /> سریال ها{" "}
      </PageTitle>

      <SearchBox>
        <Title> جوستوجوی پیشرفته</Title>
        <SearchPic />
        <AutoComplete
          suggestions={genre}
          setState={setWithGenre}
          className={"autocomplete__genre"}
        >
          ژانر ها{" "}
        </AutoComplete>
        <AutoComplete
          suggestions={company}
          setState={setWithCompany}
          className={"autocomplete__company"}
        >
          شرکت ها{" "}
        </AutoComplete>
        {/* <AutoComplete setState={setPerson} className={"autocomplete__person"}>
          بازیگران
        </AutoComplete> */}
        <SliderRangeVote
          voteGt={voteGt}
          voteLt={voteLt}
          className={"input-range__vote"}
        />
        {/* <SliderRangeDate
          dateGt={dateGt}
          dateLt={dateLt}
          className={"input-range__date"}
        /> */}
        <Button onClick={clickSearchHandle}>جوستجو</Button>
      </SearchBox>
      <Grid>
        {results.length ? (
          results.map((result, i) => (
            <AdvancedCard products={result} type={"tv"} key={i} />
          ))
        ) : (
          <LoadRoller status={status} />
        )}
        {results.length && (
          <PaginationBar
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setParmas}
            params={params}
          />
        )}
      </Grid>
    </Section>
  );
};

export default Serie;

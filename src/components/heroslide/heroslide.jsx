import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosConfig } from "../../api/axios";
import LoadRoller from "../load-roller/load-roller";
import { useNavigate } from "react-router-dom";
import {
  StarIcon,
  ViewIcon,
  HeroSlideEl,
  Container,
  Img,
  Content,
  Title,
  OverView,
  Btns,
  Contain,
  GenreIcon,
  DateIcon,
  List,
} from "./heroslide.styles";
import { useGetTrends } from "./usegettrends";

const HeroSlide = () => {
  const { data, status } = useGetTrends("movie");

  if (!sessionStorage.getItem("results") && data) {
    sessionStorage.setItem(
      "results",
      JSON.stringify(data.filter((_, idx) => idx < 5))
    );
  }
  const results = JSON.parse(sessionStorage.getItem("results"));

  if (!results || !results.length)
    return (
      <HeroSlideEl>
        <LoadRoller status={status} />
      </HeroSlideEl>
    );

  return (
    <HeroSlideEl>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        speed={1000}
        effect="fade"
        loop
        autoplay={{ delay: 5000 }}
        preventClicks={true}
        preventClicksPropagation={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<img class="${className}" 
              src="${axiosConfig.imgOrginal(
                results[index].backdrop_path
              )}"></img>`;
          },
        }}
      >
        {results.map((result, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItems
                result={result}
                isActive={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" /> {/* pagination element */}
      </Swiper>
    </HeroSlideEl>
  );
};

const HeroSlideItems = ({ result, isActive }) => {
  const navigate = useNavigate();
  const { id, original_title, title, backdrop_path, poster_path, media_type } =
    result;

  // TIME
  const date = new Date(result.release_date).getFullYear();
  const fullDate = new Date(result.release_date).toLocaleString("US", {
    dateStyle: "medium",
  });

  // VOTE
  const voteAverage = result.vote_average.toFixed(1);
  const voteCount = result.vote_count.toLocaleString("US", {
    notation: "compact",
    style: "decimal",
  });

  //  GENRE
  const genreList = useSelector((state) => state.tmdb.genreList);
  const genres = result.genre_ids.map((id) => {
    const genre = genreList.find((genre) => genre.id === id);
    if (!genre) return Object;
    return genre;
  });

  // LIST
  const list = [
    {
      name: "ژانر",
      data: genres,
      obj: true,
      objKey: "name",
      logo: <GenreIcon />,
    },
    { name: "امتیاز", data: [voteAverage], obj: false, logo: <StarIcon /> },
    { name: "تعداد رای", data: [voteCount], obj: false, logo: <ViewIcon /> },
    { name: "تاریخ تولید", data: [fullDate], obj: false, logo: <DateIcon /> },
  ];

  // STYLES
  const background = {
    backgroundImage: `url(${axiosConfig.imgOrginal(backdrop_path)})`,
  };

  return (
    <Contain>
      <div className={`background`} style={background} />
      <div className="shadow-top" />
      <div className="shadow-bot" />
      <Container className={isActive}>
        <Img onClick={() => navigate(`detail/${media_type}/${id}`)}>
          <img src={axiosConfig.imgw500(poster_path)} alt={original_title} />
        </Img>
        <Content>
          <Title>
            {title} {date} فیلم
          </Title>
          {/* // LIST  */}
          {list.map((list, i) => (
            <List key={i} time={`1.${i * 2}s`}>
              {list.logo} {list.name} :
              {list.data.map((data, i) => {
                const value = list.obj ? data[list.objKey] : data;
                function clickHandle() {
                  if (!list.obj) return;
                }
                return (
                  <div key={i} onClick={clickHandle}>
                    {value}
                  </div>
                );
              })}
            </List>
          ))}
          <Btns>
            <Link className="bg-none" to={`detail/${media_type}/${id}`}>
              بیشتر
            </Link>
            <Link className="red" to={`detail/${media_type}/${id}`}>
              تماشا کن
            </Link>
          </Btns>
        </Content>
      </Container>
    </Contain>
  );
};

export default HeroSlide;

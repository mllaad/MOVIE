import { forwardRef, useState } from "react";
import { axiosConfig } from "../../api/axios";
import Modal from "../modal/modal";
import Player from "../player/player";
import {
  Wrapp,
  IconModal,
  IconCountry,
  IconCompany,
  IconDirector,
  IconGenre,
  IconStars,
  IconButton,
  PlayerContain,
  NotFound,
} from "./advanced-card.styles";
import { useRef } from "react";
import { useGetVideoId } from "./customhook";
import { useNavigate } from "react-router-dom";

const AdvancedCard = ({ products, type }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  if (!products) return;
  const { detail, credits } = products;

  const unknown = "ناشناس";
  const notfound = "موجود نیست";

  // ID
  const id = detail.id;
  // TITLE
  const title = detail.title || detail.original_title;

  // GENRES
  const genres = detail.genres;

  // DIRECTORS
  const directors = JSON.parse(JSON.stringify(credits.crew));
  directors.sort((a, b) => b.popularity - a.popularity);
  const director = directors.find(
    (director) => director.known_for_department === "Directing"
  ) || { name: unknown };

  // ACTORS
  const getStars = JSON.parse(JSON.stringify(credits.cast));
  getStars.sort((a, b) => b.popularity - a.popularity);
  const stars = getStars.filter((_, i) => i < 3);

  // COUNTRY
  const countries = detail.production_countries;

  // COMPANIES
  const companies = detail.production_companies;

  // VOTE
  const voteAverage = detail.vote_average;
  const voteCount = detail.vote_count;
  // PIC
  const pic = detail.poster_path || detail.backdrop_path;

  // OVERVIEW
  const overview = detail.overview;

  return (
    <>
      {/* // MODAL // */}

      <ModalIframe ref={modalRef} type={type} show={showModal} id={id} />

      <Wrapp>
        <div className="cover">
          <img
            src={axiosConfig.imgw500(pic)}
            onClick={() => navigate(`/detail/${type}/${id}`)}
          />
          <div
            className="btn-modal"
            onClick={() => {
              modalRef.current.classList.add("show");
              setShowModal(true);
            }}
          >
            <span className="btn-modal__text">مشاهده تریلر</span>
            <span className="btn-modal__icon">
              <IconModal />
            </span>
          </div>
        </div>
        <article>
          <h2> {title} فیلم </h2>
          <div className="genre">
            <IconGenre /> : ژانر
            {genres.map((genre, i) => (
              <ShowGenre key={i} genre={genre} />
            ))}
          </div>
          <div className="director">
            <IconDirector /> {director.name} : کارگردان
          </div>
          <div className="stars">
            <IconStars /> : ستارگان
            {stars.map((star, i) => (
              <ShowStar key={i} star={star} />
            ))}
          </div>

          <div className="company">
            <IconCompany /> : شرکت
            {companies.map((company, i) => (
              <ShowCompanies key={i} company={company} />
            ))}
          </div>
          <div className="country">
            <IconCountry /> : محصول کشور {` `}
            {countries.map((country, i) => (
              <ShowCountries key={i} country={country} />
            ))}
          </div>
          <div className="advanced-vote">
            <Vote voteAverage={voteAverage} voteCount={voteCount} />
          </div>
          <div className="overview">{overview}</div>
        </article>
        <button
          className="advanced-card__btn"
          onClick={() => navigate(`/detail/${type}/${id}`)}
        >
          <p className="btn__title">
            {" "}
            ادامه / <span className="btn__title--color">دانلود</span>
          </p>
          <IconButton />
        </button>
      </Wrapp>
    </>
  );
};

/// VOTE COMPONENT
const Vote = ({ voteAverage, voteCount }) => {
  let voteC;
  if (voteCount.toString().length > 3) {
    voteC = (voteCount / 1000).toFixed(1) + "k";
  } else {
    voteC = voteCount;
  }
  return (
    <>
      <span className="advanced-vote__vote-avrage">
        {voteAverage.toFixed(1)}
      </span>
      <span className="advanced-vote__vote-base">/10</span>
      <div className="advanced-vote__lines" />
      <div className="advanced-vote__vote-count">{voteC} Votes</div>
    </>
  );
};

///// MODAL
const ModalIframe = forwardRef(({ type, id, show }, ref) => {
  const { video, status } = useGetVideoId(type, id);

  let showModal;
  if (show) {
    showModal = !video ? (
      <NotFound dir="rtl">موجود نمی باشد ! :( </NotFound>
    ) : (
      <PlayerContain>
        <Player trailer={video} />
      </PlayerContain>
    );
  }
  return <Modal ref={ref}>{showModal}</Modal>;
});

const ShowGenre = ({ genre }) => <span> {genre.name} </span>;
const ShowStar = ({ star }) => <span> {star.name} </span>;
const ShowCountries = ({ country }) => <span> {country.name} </span>;
const ShowCompanies = ({ company }) => <span> {company.name} </span>;

export default AdvancedCard;

import { useParams, useNavigate } from "react-router-dom";
import { useAllRequests, useGetCompany } from "./useallrequests";
import { axiosClient, axiosConfig } from "../../api/axios";
import { VscFileSubmodule } from "react-icons/vsc";
import { GiDualityMask } from "react-icons/gi";
import { IoIosGlobe } from "react-icons/io";
import { BsCalendarCheck } from "react-icons/bs";
import SwiperActors from "../../components/swiper-actor/swiper-actor";
import LoadRoller from "../../components/load-roller/load-roller";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdAccessTime,
  MdOutlinePersonOutline,
  MdProductionQuantityLimits,
} from "react-icons/md";
import toFarsi from "../../api/tofaris";
import ISO from "../../api/iso_3166_1";
import SwiperPicture from "../../components/swiper-picture/swiper-picture";
import SwiperCard from "../../components/swiper-card/swiper-card";
import Player from "../../components/player/player";
import { useRef } from "react";
import Modal from "../../components/modal/modal";
import { forwardRef, useState } from "react";
import { useEffect } from "react";

const DetailPage = () => {
  const navigate = useNavigate();
  const [compamyID, setCompanyID] = useState(null);
  const modalRef = useRef(null);

  const { category, id } = useParams();
  const { results, status } = useAllRequests(category, id);
 
  if (status !== "fulfilled")
    return (
      <div className="w-screen h-screen bg-black">
        <LoadRoller status={status} />
      </div>
    );

  const { detail, credits, images, recommendations, similar, videos } = results;
 
  // CREDITS ___
  const director =
    credits.crew.find(
      (credit) => credit.known_for_department === "Directing"
    ) || "";
  const producer =
    credits.crew.find(
      (credit) => credit.known_for_department === "Production"
    ) || "";
  const stars = credits.cast.filter(
    (credit, i) => credit.known_for_department === "Acting" && i < 4
  );

  const moreStars = credits.cast.filter(
    (credit, i) => credit.known_for_department === "Acting" && i < 15
  );

  // DETAIL ____
  const companies = detail.production_companies.filter((_, i) => i < 3);
  const countries = detail.production_countries.map(
    (country) => ISO[country.iso_3166_1]
  );

  const date = new Date(detail.release_date || detail.first_air_date);
  const year = date.getFullYear();

  const dateEl = date.toLocaleString("en-US", { dateStyle: "medium" });
  const dateFa = date.toLocaleString("fa-IR", { dateStyle: "short" });
  const runTime = detail.runtime || detail.episode_run_time;

  const runtime = runTime ? runTime.toLocaleString("fa-IR") : "موجود نیست";

  const voteAvrage = detail.vote_average.toFixed(1);
  const voteCount = detail.vote_count.toLocaleString("US", {
    notation: "compact",
    style: "decimal",
  });

  // IMAGES ___

  const pictures = images.filter((_, i) => i < 8);

  // VIDEOS ___
  const trailers = videos.filter(
    (video, i) => video.site === "YouTube" && i < 2
  );

  // SIMILAR && RECOMMENDATION
  const suggestion = similar.length ? similar : recommendations;

  // <<STYLES>> //
  const backgroundPageURL = {
    backgroundImage: `url(${axiosConfig.imgOrginal(detail.backdrop_path)})`,
  };

  //// MAIN CONTENT ////
  const styleLogo = "text-[#eb8307] text-xl ml-2 max-[400px]:ml-1";
  const mainContent = [
    {
      name: "ستارگان",
      data: stars,
      destructure: "name",
      clickable: true,
      logo: <GiDualityMask className={styleLogo} />,
    },
    {
      name: "شرکت",
      data: companies,
      destructure: "name",
      clickable: true,
      logo: <MdProductionQuantityLimits className={styleLogo} />,
    },
    {
      name: "محصول کشور",
      data: countries,
      destructure: "",
      clickable: false,
      logo: <IoIosGlobe className={styleLogo} />,
    },

    {
      name: "تاریخ انتشار",
      data: [dateEl, dateFa],
      destructure: "",
      clickable: false,
      logo: <BsCalendarCheck className={styleLogo} />,
    },
    {
      name: "ژانر",
      data: detail.genres,
      destructure: "name",
      clickable: true,
      logo: <VscFileSubmodule className={styleLogo} />,
    },
    {
      name: "کارگردان",
      data: [director],
      destructure: "original_name",
      clickable: false,
      logo: <MdOutlinePersonOutline className={styleLogo} />,
    },
    {
      name: "تهیه کننده",
      data: [producer],
      destructure: "original_name",
      clickable: false,
      logo: <MdOutlinePersonOutline className={styleLogo} />,
    },
    {
      name: "زمان",
      data: ["دقیقه", runtime],
      destructure: "",
      clickable: false,
      logo: <MdAccessTime className={styleLogo} />,
    },
  ];

  return (
    <div className="bg-black pb-16 ">
      {/* // background // */}
      <div
        className="z-0 absolute w-full h-screen bg-cover bg-center  brightness-[0.9] blur-[2px] max-[600px]:h-[1000px]"
        style={backgroundPageURL}
      ></div>
      {/* // container // */}
      <div className="relative w-5/6 m-auto max-[800px]:w-[98%] md:w-[98%] lg:w-[90%] xl:w-[85%]  max-[800px]:px-2">
        {/* // main section // */}
        <div className=" flex justify-end justify-items-center h-screen max-[800px]:h-[700px] max-[600px]:h-[900px]  pt-32 max-[800px]:flex-col-reverse max-[800px]:items-center pb-[200px]">
          {/* // content // */}
          <div className="w-8/12 text-white font-['Shabnam'] px-5  max-[800px]:w-full max-[800px]:px-0 ">
            <div className="w-full  h-20 flex justify-between items-start max-[600px]:h-min max-[600px]:pt-10">
              <IMDbLogo voteAvrage={voteAvrage} voteCount={voteCount} />
              <Title detail={detail} year={year} category={category} />
            </div>

            {/* // MAIN CONTENT  */}
            {/* grid-template-rows works because of spans!!!!{{{  grid-rows-[80px 80px 80px 80px]}}} */}
            <div className="grid grid-cols-2  gap-y-8 pt-3 max-[800px]:gap-y-2  max-[600px]:block">
              {mainContent.map((content, i) => {
                const _this = content;
                const wrapper =
                  "flex flex-wrap items-center  max-[800px]:text-sm max-[400px]:text-xs max-[600px]:py-1";
                return (
                  <div key={i} dir="rtl" className={` ${wrapper}`}>
                    <span className="flex justify-end items-center ">
                      {_this.logo} : {_this.name}
                    </span>
                    {content.data.map((data, i) => {
                      let className = "mr-2";
                      if (_this.clickable) {
                        className = "mr-2 cursor-pointer hover:text-[#eb8307]";
                      }

                      function clickHandle() {
                        if (_this.name === "ژانر") {
                          navigate(`/${category}`);
                        }
                        if (_this.name === "ستارگان") {
                          navigate(`/person/${data.id}`);
                        }
                        if (_this.name === "شرکت") {
                          modalRef.current.classList.add("show");
                          setCompanyID(data.id);
                        }
                      }
                      return (
                        <div
                          key={i}
                          className={className}
                          onClick={clickHandle}
                        >
                          {_this.destructure ? data[_this.destructure] : data}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="text-right items-center pt-10 max-[400px]:text-xs max-[700px]:hidden">
              {detail.overview || detail.tagline}
            </div>
          </div>
          <Image detail={detail} />
        </div>
        <div className="max-[700px]:pt-[100px]">
          <SwiperActors actors={moreStars}> بازیگران </SwiperActors>
        </div>

        <SwiperPicture pictures={pictures}> عکس </SwiperPicture>
        <Video trailers={trailers}> تریلر </Video>
        <SwiperCard card={suggestion} category={category}>
          پیشنهادی
        </SwiperCard>
      </div>
      {/* // MODAL */}
      <ModalCompany ref={modalRef} type={category} compamyID={compamyID} />
    </div>
  );
};

// IMAGE
const Image = ({ detail }) => {
  const imageURL = axiosConfig.imgw500(detail.poster_path);
  const styled = {
    backgroundImage: "linear-gradient(170deg,#eb8307,transparent)",
  };
  return (
    //w-80 max-[800px]:h-72 max-[800px]:w-60
    <div
      className="relative  p-[3px] rounded h-full  aspect-auto"
      style={styled}
    >
      <img className=" h-full rounded  " src={imageURL} alt={detail.title} />
    </div>
  );
};

// TITLE
const Title = ({ detail, year, category }) => {
  const flex = "flex justify-end items-center flex-wrap-reverse ml-auto";
  return (
    <div
      className={
        flex + " text-[1.7rem] mt-3 max-[800px]:text-xl max-[800px]:text-center"
      }
    >
      <p className="mr-2">{detail.title || detail.original_name}</p>
      <p className="mr-2">{year}</p>
      <p className="">{toFarsi[category]}</p>
    </div>
  );
};

// VOTE LOGO
const IMDbLogo = ({ voteAvrage, voteCount }) => {
  return (
    <div className="w-20 text-center max-[400px]:hidden">
      <div className="">
        <span className="text-[#eb8307] text-2xl font-bold">{voteAvrage}</span>
        <span className="">/10</span>
      </div>
      <div className="h-[1px] w-full bg-[#eb8307]" />
      <div className=" pt-1 ">{voteCount} Votes</div>
      <div className="m-auto h-5 w-14 font-black bg-[#eb8307] border rounded-lg border-none">
        IMDb
      </div>
    </div>
  );
};

// VIDEO
const Video = ({ trailers, children }) => {
  return (
    <div className="w-full h-auto pt-14 max-[600px]:pb-5">
      <div className="w-full m-auto h-20 flex flex-col justify-end ">
        <div className="text-white font-[Shabnam] pb-3 text-center text-lg">
          {children}
        </div>
        <div className="h-[1px] bg-[#eb8307]"></div>
      </div>
      {trailers.length ? (
        trailers.map((trailer, i) => <Player key={i} trailer={trailer} />)
      ) : (
        <div className="font-[Shabnam] text-center text-white"> موجود نیست</div>
      )}
    </div>
  );
};

// MODAL
const ModalCompany = forwardRef(({ compamyID, type }, ref) => {
  const list = useGetCompany(compamyID);

  return (
    <Modal ref={ref} type={type}>
      {list ? (
        <div className="m-auto font-[Shabnam] grid grid-cols-2 gap-x-16 p-10 items-center max-[700px]:block max-[700px]:p-7 max-[700px]:text-sm">
          <a
            className="m-auto"
            href={list.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="row-span-6 py-2 m-auto "
              src={axiosConfig.imgOrginal(list.logo_path)}
            />
          </a>
          <div className="text-center text-3xl pb-10 max-[700px]:hidden">
            {list.name}
          </div>
          <div className="text-right" dir="auto">
            تاسیس : {ISO[list.origin_country]}
          </div>
          <div className="text-right" dir="auto">
            مرکز : {list.headquarters}
          </div>
          <div className="text-right col-span-2" dir="auto">
            توضیحات : {list.description}
          </div>
          <div className="text-right flex flex-wrap col-span-2" dir="auto">
            اطلاعات بیشتر :
            <a href={list.homepage} target="_blank" rel="noopener noreferrer">
              {list.homepage}
            </a>
          </div>
        </div>
      ) : (
        <div className="m-auto ">
          <LoadRoller />
        </div>
      )}
    </Modal>
  );
});

export default DetailPage;

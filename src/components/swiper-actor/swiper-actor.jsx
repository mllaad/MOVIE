import { Navigation } from "swiper";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetBackground } from "../../utility/usegetbackground";
import { unsplashAPI } from "../../api/unsplash";
import { axiosConfig } from "../../api/axios";
import { useNavigate } from "react-router-dom";

const SwiperActors = ({ actors, children }) => {

  const navPervRef = useRef(null);
  const navNextRef = useRef(null);

  return (
    <div className=" w-full h-auto py-14 max-[600px]:pb-5 pt-14 ">
      <div className="w-full m-auto h-20">
        <div className="text-white font-[Shabnam] text-center text-lg pb-2">
          {children}
        </div>
        <div className="h-[1px] bg-[#eb8307] "></div>
      </div>
      {actors.length ? (
        <Swiper
          modules={[Navigation]}
          className="w-2/3"
          navigation={{
            prevEl: navPervRef.current,
            nextEl: navNextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navNextRef.current;
            swiper.params.navigation.nextEl = navPervRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            800: { slidesPerView: "4" },
          }}
          slidesPerView={"2"}
          spaceBetween={10}
        >
          {actors.map((actor, i) => {
            return (
              <SwiperSlide key={i}>
                <StarSwiper star={actor} />
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-prev " ref={navPervRef}></div>
          <div className="swiper-button-next " ref={navNextRef}></div>
        </Swiper>
      ) : (
        <div className="font-[Shabnam] text-center text-white"> موجود نیست</div>
      )}
    </div>
  );
};

const StarSwiper = ({ star }) => {
  const userBackground = useGetBackground(unsplashAPI.notFoundUser());
  const navigate = useNavigate()
  
  let background;
  if (!star.profile_path) {
    background = userBackground.image;

  }
  if (star.profile_path) {
    background = axiosConfig.imgOrginal(star.profile_path);
  }
  
  return (
    <div
      className="rounded-lg bg-[#292929] cursor-pointer group "
      onClick={() => navigate(`/person/${star.id}`)}
    >
      <img className="p-5  " src={background} alt={star.original_name} />
      <div className="group-hover:text-[#eb8307] bg-[#292929] transition-colors duration-[400ms] text-white text-center pb-3 rounded-lg font-semibold">
        {star.name}
      </div>
    </div>
  );
};

export default SwiperActors;

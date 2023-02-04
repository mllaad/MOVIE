import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import MovieCard from "../movie-card/moviecard";
import { useRef } from "react";

const SwiperCard = ({ card, category,   children }) => {

  const navPervRef = useRef(null);
  const navNextRef = useRef(null);
  return (
    <div className="w-full h-auto py-10 max-[600px]:py-5">
      <div className="w-full m-auto h-20 flex flex-col justify-center">
        <div className="text-white font-[Shabnam] pb-3 text-center text-lg">
          {children}
        </div>
        <div className="h-[1px] bg-[#eb8307] "></div>
      </div>
      <div className="pb-3 pt-6 rounded-lg ">
        {card.length ? (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navPervRef.current,
              nextEl: navNextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navPervRef.current;
              swiper.params.navigation.nextEl = navNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={10}
            slidesPerView={"auto"}
            loop
          >
            {card.map((recommend, i) => (
              // HACK!!
              <SwiperSlide key={i} className="bg-[#292929] p-3 rounded-lg w-[20%] max-[1050px]:w-[25%]  max-[850px]:w-[30%] max-[650px]:w-[35%] max-[550px]:w-[40%] max-[450px]:w-[55%]">
                <MovieCard result={recommend} category={category} />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev" ref={navPervRef}></div>
            <div className="swiper-button-next" ref={navNextRef}></div>
          </Swiper>
        ) : (
          <div className="font-[Shabnam] text-center text-white">
            {" "}
            موجود نیست
          </div>
        )}
      </div>
    </div>
  );
};

export default SwiperCard;

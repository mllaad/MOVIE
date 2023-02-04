import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef } from "react";
import { axiosConfig } from "../../api/axios";

const SwiperPicture = ({ pictures,slide="2", children }) => {
  const navNextRef = useRef(null);
  const navPervRef = useRef(null);

  return (
    <div className=" w-full h-auto py-10 max-[600px]:pb-5">
      <div className="w-full m-auto h-20">
        <div className="text-white font-[Shabnam] pb-3 text-center text-lg">
          {children}
        </div>
        <div className="h-[1px] bg-[#eb8307] "></div>
      </div>
      <div className="">
      {pictures.length ? (
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: navNextRef.current,
            prevEl: navPervRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navPervRef.current;
            swiper.params.navigation.nextEl = navNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            800: { slidesPerView: slide },
          }}
          loop
          spaceBetween={10}
          slidesPerView={"1"}
        >
          {pictures.map((picture, i) => (
            <SwiperSlide key={i}>
              <Picture key={i} picture={picture} />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev" ref={navPervRef} />
          <div className="swiper-button-next" ref={navNextRef} />
        </Swiper>
      ) : (
        <div className="font-[Shabnam] text-center text-white"> موجود نیست</div>
      )}
      </div>
    </div>
  );
};

const Picture = ({ picture }) => {
  const src = axiosConfig.imgOrginal(picture.file_path)
  console.log(src)
  return (
    <div className="bg-black">
      <img
        className="rounded border-white border-2 "
        src={src}
        alt=""
      />
    </div>
  );
};

export default SwiperPicture;

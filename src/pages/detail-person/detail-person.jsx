import { useParams } from "react-router-dom";
import { axiosConfig } from "../../api/axios";
import { useGetPerson } from "./cusomhook";
import LoadRoller from "../../components/load-roller/load-roller";
import SwiperPicture from "../../components/swiper-picture/swiper-picture";
import SwiperCard from "../../components/swiper-card/swiper-card";
const DetailPerson = () => {
  const { id } = useParams();

  const { results, status } = useGetPerson(id);
  if (!results)
    return (
      <div className="bg-black w-full h-screen">
        <LoadRoller status={status} />
      </div>
    );

  const { detail, image, tv, movie } = results;

  const list = [
    { name: "نام", value: detail.name },
    { name: "محل تولد", value: detail.place_of_birth },
    { name: "تاریخ تولد", value: detail.birthday },
    { name: "تاریخ فوت", value: detail.deathday },
    // { name: "بیوگرافی", value: detail.biography },
    { name: "اطلاعات بیشتر", value: detail.homepage, link: true },
  ];
  return (
    <div className="pt-[15vh] bg-[black]">
      {/* // container */}

      <h1 className="text-white text-center p-10 text-3xl">{detail.name}</h1>
      <div className="bg-[#252525] w-full">
        <div
          className="w-[70%] max-[600px]:w-[90%] m-auto flex  max-[600px]:block  py-5"
          dir="rtl"
        >
          <img
            className="object-cover aspect-auto w-52 rounded-lg max-[600px]:m-auto  "
            src={axiosConfig.imgw500(detail.profile_path)}
            alt={detail.name}
          />
          <ul className="px-10 max-[600px]:pt-5  text-white font-[Shabnam] ">
            {list.map(({ name, value, link }, i) => {
              if(!value) return;
              if (link)
                return (
                  <li key={i}>
                    {name} :
                    <a target="_blank" rel="noopener noreferrer" href={value}>
                      {value}
                    </a>
                  </li>
                );
              return (
                <li key={i}>
                  {name} : {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-[80%] m-auto">
        <SwiperPicture pictures={image} slide={"3"}> عکس هنرمند</SwiperPicture>

        <SwiperCard card={movie} category={"movie"}>
          (سینمایی)اثار این هنرمند
        </SwiperCard>
        <SwiperCard card={tv} category={"tv"}>
          (سریال)اثار این هنرمند
        </SwiperCard>
      </div>
    </div>
  );
};

export default DetailPerson;

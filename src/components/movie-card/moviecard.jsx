import { Link, NavLink } from "react-router-dom";
import { axiosConfig } from "../../api/axios";
import { unsplashAPI } from "../../api/unsplash";
import { useGetBackground } from "../../utility/usegetbackground";
import { Card, SubTitle, IconPlay } from "./moviecard.styls";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ result, category }) => {
  const notFound = useGetBackground(unsplashAPI.notFound());

  const image = () => {
    if (result.poster_path) return axiosConfig.imgw500(result.poster_path);
    if (result.backdrop_path) return axiosConfig.imgw500(result.backdrop_path);
    if (result.profile_path) return axiosConfig.imgw500(result.profile_path);
    return notFound.image;
  };

  const url =
    result.media_type === "person"
      ? `/person/${result.id}`
      : `/detail/${category || result.media_type}/${result.id}`;
  return (
    <NavLink to={url} key={result.id}>
      <Card bg={image()}>
        <IconPlay />
      </Card>
      <SubTitle>
        {" "}
        {result.name || result.original_name || result.title}{" "}
      </SubTitle>
    </NavLink>
  );
};
export default MovieCard;

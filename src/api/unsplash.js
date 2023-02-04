import axios from "axios";
import qs from "qs";

export const unsplashConfig = {
  baseURL: "https://api.unsplash.com/photos/",
  Authorization: "4vuTTkglHoAty7KiCX7lD4sJr3Dndi_kvcOyuXV4oO8",
  netflixPic: "G03vSUk9wR0",
  cinemaPicOne: "TFRezw7pQwI",
  cinemaPicTwo: "nW1n9eNHOsc",
  notFound: "zj475haUy2M",
  notFoundUser: "4l-e7U6c5ek"
};

const unsplashAxios = axios.create({
  baseURL: unsplashConfig.baseURL,
  params: {
    client_id: unsplashConfig.Authorization,
  },
  paramsSerializer: (p) => qs.stringify(p),
});

unsplashAxios.interceptors.response.use((res) => {
  return res.data.urls.small;
});

export const unsplashAPI = {
  notFound: () => unsplashAxios.get(unsplashConfig.notFound),
  netflix: () => unsplashAxios.get(unsplashConfig.netflixPic),
  cinemaOne: () => unsplashAxios.get(unsplashConfig.cinemaPicOne),
  cinemaTwo: () => unsplashAxios.get(unsplashConfig.cinemaPicTwo),
  notFoundUser: () => unsplashAxios.get(unsplashConfig.notFoundUser)
};

import { useEffect, useState } from "react";
import { tmdbApi } from "../../api/axios";

export const useGetVideoId = (type, id) => {
  const initailState = {
    video: null,
    status: "pending",
  };
  const reject = {
    video: null,
    status: "rejected",
  };
  const [list, setList] = useState(initailState);

  useEffect(() => {
    tmdbApi
      .getVideos(type, id)
      .then((res) => {
        const response = res.results.find((video) => video.site === "YouTube")
        if(!response) return setList(reject)

        setList({ video: response, status: "fulfilled" });
      })
      .catch(() => {
        console.error("cant catch data");
        setList(reject);
      });
  }, []);

  return list;
};

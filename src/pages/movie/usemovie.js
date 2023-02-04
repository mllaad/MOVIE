import { useState, useEffect } from "react";
import { tmdbApi } from "../../api/axios";

export const useGetDiscover = function (type, params) {
  const initialState = {
    results: [],
    totalPage: 0,
    currentPage: 0,
    status: "pending",
  };
  const reject = {
    results: [],
    totalPage: 0,
    currentPage: 0,
    status: "rejected",
  };
  const [list, setList] = useState(initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await tmdbApi.discover(type, { params });
        if (!response || !response.results.length) return setList(reject);

        const results = await Promise.all(
          response.results.map(async (result, i) => {
            const detail = await tmdbApi.getDetail(type, result.id);
            const credits = await tmdbApi.getCredits(type, result.id);
            return { detail, credits };
          })
        );

        setList(() => {
          return {
            results: results,
            currentPage: response.page,
            totalPage: response.total_pages,
            status: "fulfilled",
          };
        });
      } catch {
        console.error("cant catch data");
        setList(reject);
      }
    };

    getData();

    return () => setList(initialState);
  }, [params]);

  return list;
};

// SIMPLE FETCH API
export const useGetImage = function (fetch) {
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch
      .then((res) => setImage(res))
      .catch(() => console.error("something went wrong  "));
  }, []);
  return image;
};

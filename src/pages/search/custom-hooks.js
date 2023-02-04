import { useEffect, useState } from "react";
import { tmdbApi } from "../../api/axios";

export const useSearchList = (keyword, page) => {
  const initialState = {
    results: [],
    status: "null",
  };
  const pending = {
    results: [],
    status: "pending",
  }
  const rejected = {
    results: [],
    status: "rejected",
  };
  const [searchList, setSearchList] = useState(initialState);
  const params = {
    query: keyword,
    page,
  };

  useEffect(() => {
    if (!keyword) return;
    setSearchList(pending)
    tmdbApi
      .search({ params })
      .then((res) =>{
        if(!res.results.length)  return setSearchList(rejected)
        setSearchList((list) => ({
          results: [...list.results, ...res.results],
          status: "fulfilled",
        }))
      })
      .catch(() => {
        console.error("cant fetch data");
        setSearchList(rejected);
      });
    return () => setSearchList(initialState);
  }, [keyword]);
  useEffect(() => {
    if (!keyword) return;
    if (page === 1) return;
    tmdbApi
      .search({ params })
      .then((res) =>
        setSearchList((list) => ({
          results: [...list.results, ...res.results],
          status: "fulfilled",
        }))
      )
      .catch(() => {
        console.error("cant fetch data");
        setSearchList(rejected);
      });
  }, [page]);

  return searchList;
};

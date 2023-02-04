import { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
export const useGetTrends = (type) => {
  const typeCheck = ["movie", "person", "tv"];

  const check = typeCheck.some((value) => type === value);

  const initailState = {
    data: null,
    status: "pending",
  };
  const rejected = {
    data: null,
    status: "rejected",
  };
  const [list, setList] = useState(initailState);
  useEffect(() => {
    if (!check) {
      console.error(`this : ${type} is wrong!!`);
      console.error("type should be *movie or *person or *tv");
      setList(rejected);
    }

    axiosClient
      .get(`/trending/${type}/week`)
      .then((res) =>
        setList((list) => {
          return {
            data: res.results,
            status: "fulfilled",
          };
        })
      )
      .catch(() => {
        console.error("cant fetch data");
        setList(rejected);
      });
  }, []);
  return list;
};

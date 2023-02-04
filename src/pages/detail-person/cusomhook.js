import { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";

const request = {
  list: [
    { name: "detail", url: "/person/{ID}", destructure: "" },
    { name: "movie", url: "/person/{ID}/movie_credits", destructure: "cast" },
    { name: "tv", url: "/person/{ID}/tv_credits", destructure: "cast" },
    { name: "image", url: "/person/{ID}/images", destructure: "profiles" },
  ],

  mapList: async function (id) {
    const response = await Promise.all(
      this.list.map(async ({ name, url, destructure }) => {
        const response = await axiosClient.get(url.replace("{ID}", id));
        if (!destructure) return { [name]: response };
        // destructuring...
        const { [destructure]: varible } = response;
        return { [name]: varible };
      })
    );
    const total = response.reduce((total, value) => {
      return { ...total, ...value };
    });
    return total;
  },
};

export const useGetPerson = (id) => {
  const initialState = {
    results: null,
    status: "pending",
  };
  const [list, setList] = useState(initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.mapList(id);
        setList(() => {
          return { results: response, status: "fulfilled" };
        });
      } catch {
        setList(() => {
          console.error("cant fetch data!");
          return { results: null, status: "rejected" };
        });
      }
    };
    fetchData();
  }, []);
  return list;
};

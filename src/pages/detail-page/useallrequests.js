import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";

const request = {
  requests: [
    { name: "detail", url: "", destructuring: "" },
    { name: "credits", url: "/credits", destructuring: "" },
    {
      name: "recommendations",
      url: "/recommendations",
      destructuring: "results",
    },
    { name: "similar", url: "/similar", destructuring: "results" },
    { name: "images", url: "/images", destructuring: "backdrops" },
    { name: "videos", url: "/videos", destructuring: "results" },
  ],
  set: async function (category, id) {
    try {
      const response = await Promise.all(
        this.requests.map(async ({ name, url, destructuring }) => {
          //  axiosClient.get(url).then(res => console.log(res))

          const response = await axiosClient.get(`/${category}/${id}${url}`);
          if (!destructuring) return { [name]: response };
          const { [destructuring]: value } = response;
          return { [name]: value };
        })
      );

      // CONVERT TO OBJECT

      const result = response.reduce((total, value) => {
        return { ...total, ...value };
      });

      return result;
    } catch {
      console.error(`cant fetch data from request`);
      return Promise.reject()
    }
  },
};

export const useAllRequests = (category, id) => {
  const initialState = { results: null, status: "pending" };
  const [list, setList] = useState(initialState);
  useEffect(() => {
    request
      .set(category, id)
      .then((res) => setList({ results: res, status: "fulfilled" }))
      .catch(() => {
        console.error("cant fetch data");
        setList({ results: null, status: "rejected" });
      });
  }, []);
  console.log(list)
  return list;
};

/////
export const useGetCompany = (id) => {
  const [list, setList] = useState(null);
  useEffect(() => {
    if (!id) return;
    axiosClient
      .get(`/company/${id}`)
      .then((res) => setList(res))
      .catch((err) => console.error("cant fetch data <<Company>>"));
    return () => setList("change");
  }, [id]);
  return list;
};

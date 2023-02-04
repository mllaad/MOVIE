import { useState, useEffect } from "react";

export const useGetBackground = (api) => {
  const INITAILSTATE = {
    image: "",
    status: "pending",
  };
  const [image, setImage] = useState(INITAILSTATE);
  useEffect(() => {
    api
      .then((res) => {
        const response = {
          image: res,
          status: "fulfilled",
        };
        setImage(response);
      })
      .catch((err) => {
        const response = {
          image: "",
          status: "rejected",
        };
        console.error("cant fetch data");
        setImage(response);
      });
  }, []);
  return image;
};

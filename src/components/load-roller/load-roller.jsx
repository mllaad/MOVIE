import { useState } from "react";

import { LdsContainer } from "./load-roller.styles";
const LoadRoller = ({ status }) => {
  const isNull = status === "null" ? true : false;
  const isReject = status === "rejected" ? true : false;

  if (isNull) return;

  return (
    <LdsContainer>
      {!isReject ? (
        <div className="lds_container">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <h1>پیدا نشد</h1>
      )}
    </LdsContainer>
  );
};

export default LoadRoller;

// const [notFound, setNotFound] = useState(false);
// setTimeout(() => setNotFound(true), 5000);

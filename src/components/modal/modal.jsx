import { useEffect } from "react";
import { forwardRef, useRef } from "react";

import { Contain, Main, Childrens, CancelIcon } from "./modal.styles";

const Modal = forwardRef(({ children, type }, ref) => {
  const mainContentRef = useRef(null);

  const modalType = {
    top: "show - top",
    center: "show - center",
  };
  
  useEffect(() => {
    const clickHandle = (e) => {
      const isOutSide = ref.current.className === e.target.className;
      const isButton = e.target.nodeName === "svg";

      if (isOutSide || isButton) {
        ref.current.classList.remove("show");
      }
    };
    document.addEventListener("click", clickHandle);
    return () => document.removeEventListener("click", clickHandle);
  }, []);
  return (
    <Contain ref={ref} >
      <Main ref={mainContentRef} className={modalType[type]}>
        <CancelIcon />
        <Childrens>{children}</Childrens>
      </Main>
    </Contain>
  );
});

export default Modal;

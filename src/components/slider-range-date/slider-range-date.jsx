import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Slider, Results, Title } from "./slider-range-date.styles";


const SliderRangeDate = ({dateGt, dateLt, className}) => {
    
  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const track = useRef(null);
  const gap = 15;
  // const dateGt = useRef(null);
  // const dateLt = useRef(null);

  // ONLOAD
  useEffect(() => {
    function loadHandle() {
      inputOne.current.value = 0;
      inputTwo.current.value = 1000;
      inputOneHandle();
      inputTwoHandle();
    }
    loadHandle()
  },[]);

  // TO PARSE INT
  const toParsInt = (one, two) => {
    return {
      one: parseInt(one.current.value),
      two: parseInt(two.current.value),
    };
  };

  // COVERT TO DATE
  const getDate = (range) => {
    const currentDate = new Date().getFullYear();
    const firstDate = 1880;
    return Math.floor(
      (parseInt(range) / 1000) * (currentDate - firstDate) + firstDate
    );
  };

  // HANDLE ONE
  function inputOneHandle() {
    const { one, two } = toParsInt(inputOne, inputTwo);
    if (two - one <= gap) {
      inputOne.current.value = two - gap;
    }
  
    const date = getDate(inputOne.current.value);
    dateLt.current.innerText = date;
    
  }
  // HANDLE TWO
  function inputTwoHandle() {
    const { one, two } = toParsInt(inputOne, inputTwo);
    if (two - one <= gap) {
      inputTwo.current.value = one + gap;
    }

    const date = getDate(inputTwo.current.value);
    dateGt.current.innerText = date;
  }
  // TRACK ONCLICK
  function clickHandle(e) {
    const { one, two } = toParsInt(inputOne, inputTwo);
    // GET TRACK WIDTH
    const trackWidth = track.current.getBoundingClientRect().width;

    // PERCENT OF CLICK POINT <<** INVERSE!! **>>
    const percent = Math.abs(
      (e.nativeEvent.offsetX / trackWidth) * 1000 - 1000
    );

    // AVERAGE POINT OF TO INPUTS
    const average = (one + two) / 2;

    if (average < percent) {
      const date = getDate(percent);

      inputTwo.current.value = percent;
      dateGt.current.innerText = date;
    }
    if (average > percent) {
      const date = getDate(percent);

      inputOne.current.value = percent;
      dateLt.current.innerText = date;
    }
  }
  return (
    <Container className={className}>
      <Results>
        <span ref={dateGt} />
        <span> &ndash; </span>
        <span ref={dateLt} />
      </Results>
      <Title>سال ساخت</Title>
      <Slider>
        <div className="track" ref={track} onClick={clickHandle} />
        <input
          type="range"
          ref={inputOne}
          max="1000"
          min="0"
          //   value={inputOne.current.value}
          onInput={inputOneHandle}
        />
        <input
          type="range"
          ref={inputTwo}
          max="1000"
          min="0"
          // value={inputTwo.current.value}
          onInput={inputTwoHandle}
        />
      </Slider>
    </Container>
  );
};

export default SliderRangeDate;

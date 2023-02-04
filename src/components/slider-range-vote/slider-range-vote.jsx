import { useEffect } from "react";
import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  Slider,
  Title,
  Results,
  Container,
} from "./slider-range-vote.styles.jsx";

const SliderRangeVote = ({voteGt, voteLt, className}) => {


  // LOADING
  useEffect(() => {
    function loadHandle() {
      inputOne.current.value = 0;
      inputTwo.current.value = 1000;
      inputOneHandle();
      inputTwoHandle();
    }
    loadHandle()
  },[]);

  // INPUTS
  const track = useRef(null);
  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const gap = 10;

  // TEXT BOX
  // const voteGt = useRef(null);
  // const voteLt = useRef(null);

  function toParseInt(inputOne, inputTwo) {
    return {
      one: parseInt(inputOne.current.value),
      two: parseInt(inputTwo.current.value),
    };
  }

  // FILL COLOR TRACK
  // const fillColor = useCallback(() => {
  //     if(track.current == null) return
  //         const percent1 = Math.floor(rangeOne / 1000 * 100)
  //         const percent2 = Math.floor(rangeTwo / 1000 * 100)
  //         track.current.style.background = `linear-gradient(to left, #050505 ${percent1 + 1}% , #eb8307 ${percent1}% , #eb8307 ${percent2}%, #050505 ${percent2}%)`;
  //     },[rangeOne, rangeTwo]);
  ////////////////////////////////////////////////////////////

  const getVote = (range) => parseFloat((range / 100).toFixed(1));

  // ONINPUT ONE
  function inputOneHandle() {
    const { one, two } = toParseInt(inputOne, inputTwo);
    // INVERSE!!
    if (two - one <= gap) {
      inputOne.current.value = two - gap;
    }

    const vote = getVote(inputOne.current.value);
    voteLt.current.innerText = vote;
  }

  // ONINPUT TWO
  function inputTwoHandle() {
    const { one, two } = toParseInt(inputOne, inputTwo);
    // INVERSE!!
    if (two - one <= gap) {
      inputTwo.current.value = one + gap;
    }
    const vote = getVote(inputTwo.current.value);
    voteGt.current.innerText = vote;
  }

  // TRACK ONCLICK
  function clickHandle(e) {
    const { one, two } = toParseInt(inputOne, inputTwo);
    // GET TRACK WIDTH
    const trackWidth = track.current.getBoundingClientRect().width;

    // PERCENT OF CLICK POINT <<** INVERSE!! **>>
    const percent = Math.abs(
      (e.nativeEvent.offsetX / trackWidth) * 1000 - 1000
    );

    // AVERAGE POINT OF TO INPUTS
    const average = (one + two) / 2;

    if (average < percent) {
     
      const vote = getVote(percent);
     
      inputTwo.current.value = percent;
      voteGt.current.innerText = vote;
    }
    if (average > percent) {
     
      const vote = getVote(percent);
     
      inputOne.current.value = percent;
      voteLt.current.innerText = vote;
    }
  }
  // fillColor()
  return (
    <Container className={className}>
      <Results>
        <span ref={voteGt} />
        <span>&ndash; </span>
        <span ref={voteLt} />
      </Results>
      <Title>امتیاز</Title>

      <Slider>
        <div className="track" ref={track} onClick={clickHandle} />
        <input
          type="range"
          ref={inputOne}
          max="1000"
          min="0"
          // value={inputOne.current.value}
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
export default SliderRangeVote;

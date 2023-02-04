import { useState, useRef } from "react";
import { tmdbApi, axiosConfig } from "../../api/axios";

import { Wrap } from "./autocomplete.styles";

const AutoComplete = ({ suggestions, setState, children, className }) => {
  const isShowEl = useRef(null);
  const [activeIndx, setActiveIndx] = useState(-1);
  const [fieldInput, setFieldInput] = useState("");
  const [suggests, setSuggests] = useState([]);

  // ON CHANGE
  function changeHandle(e) {
    const params = { query: e.target.value };

    let filterdSuggest;
    // FETCH DATA
    if (suggestions == null) {
      tmdbApi.searchPerson({ params }).then((res) => {
        res.results.sort((a, b) => b.popularity - a.popularity);
        filterdSuggest = res.results.filter((_, inx) => inx < 5);
        setSuggests(filterdSuggest);
      });
      // GET DATA LOCALLY
    } else {
      filterdSuggest = suggestions.filter(
        (suggestion) =>
          suggestion.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >
          -1
      );
      setSuggests(filterdSuggest);
    }
    isShowEl.current.classList.add("show");
    setActiveIndx(-1);
    setFieldInput(e.target.value);

    /// REMOVE IS FILTER BY REMOVE THE STATE VALUE
    if (e.target.value.length === 0) return setState("");
  }

  // ON KEY HANDLE
  function keyHandle(e) {
    switch (e.keyCode) {
      case 13:
        isShowEl.current.classList.remove("show");
        setFieldInput(suggests[activeIndx].name);
        setState(suggests[activeIndx]);
        setSuggests([]);
        break;
      // UP
      case 38:
        if (activeIndx === -1) return;
        setActiveIndx(activeIndx - 1);
        break;
      // DOWN
      case 40:
        if (activeIndx + 1 === suggests.length) return;
        setActiveIndx(activeIndx + 1);
        break;
      // ESC
      case 27:
        isShowEl.current.classList.remove("show");
        break;
    }
  }

  // ON CLICK
  function clickHandle(e) {
    // the target and be in image element or li itself!
    setFieldInput(e.target.innerText || (e.target.alt || e.target.children[0].innerText));
    setSuggests([]);
    isShowEl.current.classList.toggle("show");

    // GETTING NUMBER OF ELEMENT TO MATCHED WITH INDEX OF SUGGEST 
    const [suggestClassName] = e.nativeEvent.composedPath().filter((item) => {
      if (item.className == null) return;
      return item.className.indexOf("$id") > -1;
    });
   
    const [_, num] = suggestClassName.className.split("$id_");
    
    // INDEX OF SUGGEST MATCH BY THE CLASS NUMBER
    setState(suggests[parseInt(num)]);
    setActiveIndx(parseInt(num));
  }

  let suggetsComponent;

  // COMPONENT WITH FETCHED DATA
  if (suggestions == null) {
    suggetsComponent = (
      <ul ref={isShowEl} className={`suggestions `}>
        {!suggests.length && <em>جستجو کن</em>}
        
        {suggests.map((suggest, i) => {

          const className = activeIndx === i ? "suggestion-active" : "";
          return (
            <li
              className={`${className} $id_${i}`}
              key={i}
              onClick={clickHandle}
            >
              <p>{suggest.name}</p>
              <img
                src={`${axiosConfig.imgw500(suggest.profile_path)}`}
                alt={suggest.name}
              />
            </li>
          );
        })}
      </ul>
    );
    // COMPONENT WITH LOCAL DATA
  } else if (suggestions != null) {
    suggetsComponent = (
      <ul ref={isShowEl} className="suggestions">
        {!suggests.length && <em>پیدا نشد</em>}
        {suggests.map((suggest, i) => {
          const className = activeIndx === i ? "suggestion-active" : "";
          return (
            <li
              className={`${className} $id_${i}`}
              key={i}
              onClick={clickHandle}
            >
              <p>{suggest.name}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  

  function clickInput(event) {
    const _this = event.target
    if (suggestions ) {
      setSuggests(suggestions);
    }
    const clickHandle = (e) => {
      if(_this.id === e.target.id) {
        isShowEl.current.classList.toggle('show')
      } 
      if(_this.id !== e.target.id)  {
        isShowEl.current.classList.remove('show')
      }
      if(isShowEl.current.classList.contains('show')) return;
      document.removeEventListener('click', clickHandle)
    }
    document.addEventListener('click', clickHandle)
  }

  const randomID = Math.floor(Math.random() * 1000).toString();

  function removeHandle () {
    setFieldInput("")
    setState("")
    setSuggests([])
  }
  return (
    <Wrap className={className}>
      <input
        id={randomID}
        className="autocomplete"
        onClick={clickInput}
        onChange={changeHandle}
        onKeyDown={keyHandle}
        value={fieldInput}
        autoComplete="off"
      />
      {fieldInput.length ? <span onClick={removeHandle}>&#10005;</span> : ""}
      {suggetsComponent}
      <label>{children}</label>
    </Wrap>
  );
};

export default AutoComplete;

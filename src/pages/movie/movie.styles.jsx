import styled from "styled-components";
import { ReactComponent as SearchLogo } from "../../assets/search.svg";
import { breakpoint } from "../../assets/styles/breakpoint";
import { GiFilmProjector } from "react-icons/gi";

export const Section = styled.div`
  background-color: black;
  position: relative;
`;

export const Background = styled.div`
  background: url(${(props) => props.bg});
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 650px;
  position: relative;
  z-index: 0 !important;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    width: 100%;
    height: 25vh;
    background-image: linear-gradient(
      to bottom,
      rgba(1, 1, 1, 0),
      rgba(1, 1, 1, 1)
    );
  }
`;

export const SearchBox = styled.div`
  position: absolute;
  z-index: 1;
  top: 250px;
  ${breakpoint.tablet.standard`top:170px`}
  left: 50%;
  transform: translate(-50%);
  margin: auto;
  width: 70%;
  ${breakpoint.tablet.large`width: 90%;`}
  ${breakpoint.tablet.standard`width: 95%;`}
    padding: 25px 10px;
  background-color: #232323;
  display: grid;
  grid-template-columns: repeat(3, fr);
  grid-template-rows: 40px 40px 60px 60px;
  ${breakpoint.tablet.large`grid-template-rows: 40px 60px 60px 60px 60px;`}
  ${breakpoint.tablet
    .standard`grid-template-rows: 40px 60px 60px 60px 50px 50px 50px;`}
  ${breakpoint.tablet.large`padding: 10px 10px`}
  place-items:center;
  border-radius: 10px;
  box-shadow: 1px 0px 20px 1px black;
  .autocomplete__genre {
    width: 100%;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    ${breakpoint.tablet.large`grid-row: 4 / span 1`}
    ${breakpoint.tablet.standard`grid-row: 5 / span 1`}
    ${breakpoint.tablet.standard`grid-column: 1 / span 3`}
  }
  .autocomplete__company {
    ${breakpoint.tablet.standard`grid-column: 1 / span 3`};
    width: 100%;
  }
  // PERSON
  .autocomplete__person {
    width: 100%;
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
    ${breakpoint.tablet.large`grid-row: 5 / span 1`}
    ${breakpoint.tablet.standard`grid-row: 6 / span 1`}
    ${breakpoint.tablet.standard`grid-column: 1 / span 3`}
    justify-items: space-between;
  }

  /* VOTE */
  .input-range__vote {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    ${breakpoint.tablet.large`grid-column: 1 / span 3`}
    ${breakpoint.tablet.large`grid-row: 2 / span 1`}
  }

  /* DATE */
  .input-range__date {
    grid-column: 1 / span 1;
    grid-row: 4 / span 1;
    ${breakpoint.tablet.large`grid-column: 1 / span 3`}
    ${breakpoint.tablet.large`grid-row: 3 / span 1`}
  }
`;

export const Title = styled.div`
  font-family: Shabnam;
  font-size: 1.5rem;
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
  ${breakpoint.tablet.large`grid-column: 1 / span 3`}
  color: #eb8307;
`;

export const Button = styled.div`
  font-family: Shabnam;
  font-size: 1.1rem;
  background-color: #646464;
  grid-column: 2 / span 1;
  grid-row: 4 / span 1;
  ${breakpoint.tablet.large`grid-column: 1 / span 1`}
  ${breakpoint.tablet.large`grid-row: 5 / span 1`}
    ${breakpoint.tablet.standard`grid-row: 7 / span 1`}
    ${breakpoint.tablet.standard`grid-column: 1 / span 3`}
    color: black;
  border: none;
  border-radius: 5px;
  padding: 7px 40px;
  cursor: pointer;
  transition: color 0.4s;
  &:hover {
    color: #ffffff;
  }
  &::selection {
    background-color: red;
  }
`;
export const PageTitle = styled.div`
  ${breakpoint.tablet.standard`display:none;`}
  font-family: Shabnam;
  font-size: 3.5rem;
  color: #ffffffe4;
  position: absolute;
  display: flex;
  top: 140px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;
export const Grid = styled.div`
  min-height: 80vh;
  width: 100%;
`;
export const SearchPic = styled(SearchLogo)`
  grid-column: 3 / span 1;
  grid-row: 2 / span 3;
  width: 170px;
  height: 170px;
  ${breakpoint.tablet.large`display:none;`}
`;

export const IconMovie = styled(GiFilmProjector)`
  font-size: 4rem;
  vertical-align: -10px;
  color: #eb8307;
`;

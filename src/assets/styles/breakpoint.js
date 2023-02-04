import { css } from "styled-components";

export const wwSize = {
  mobile: {
    large: 430,
    small: 320,
  },
  tablet: {
    standard: 768,
    large: 1000,
  },
};
export const breakpoint = {
  mobile: {
    standard: (...args) => css`
      @media (max-width: 430px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (max-width: 500px) {
        ${css(...args)}
      }
    `,
  },
  tablet: {
    small: (...args) => css`
      @media (max-width: 700px) {
        ${css(...args)}
      }
    `,
    standard: (...args) => css`
      @media (max-width: 768px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (max-width: 1000px) {
        ${css(...args)};
      }
    `,
    xlarge: (...args) => css`
      @media (max-width: 1300px) {
        ${css(...args)};
      }
    `,
  },
};

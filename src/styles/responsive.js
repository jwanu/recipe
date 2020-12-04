import { css } from 'styled-components';

const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1216,
};

// max container width : 544 / 720 / 960 / 1152 

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;

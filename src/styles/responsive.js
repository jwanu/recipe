import { css } from 'styled-components';

const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1216,
};

// max container width : 544 / 720 / 944 / 1168 - 좌우마진 24px씩으로.

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;

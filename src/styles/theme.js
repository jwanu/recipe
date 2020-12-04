import { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import media from './responsive';
import color from './colors';
import size from './size';

const theme = {
  bodyColor: '#fffbf6',
  boxRadius: '10px',
  activeColor: color.orange[7],
  paleColor: color.orange[2],
  blackColor: '#1f1007',
};

export default theme;
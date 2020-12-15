import { css, keyframes } from 'styled-components';
import color from './colors';

const load = keyframes`
  from {
        left: -150px;
    }
  to {
        left: 100%;
  }
`;

const skeleton = css`
  &:empty {
    position: relative;
    border-radius: 10px;
    background: ${color.gray[2]};
    overflow: hidden;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: -150px;
      top: 0;
      height: 100%;
      width: 150px;
      background: linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);
      animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  }
`;

export default skeleton;

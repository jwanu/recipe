const calcRem = (size) => `${size / 16}rem`;

const font = {
  xs: calcRem(12),
  sm: calcRem(14),
  md: calcRem(18),
  lg: calcRem(26),
  xl: calcRem(46),
  xxl: calcRem(64),
};

const padding = {
  xs: calcRem(8),
  sm: calcRem(16),
  md: calcRem(24),
  lg: calcRem(32),
  xl: calcRem(40),
};

const margin = {
  xs: calcRem(8),
  sm: calcRem(16),
  md: calcRem(24),
  lg: calcRem(32),
  xl: calcRem(40),
};

const gap = {
  base: calcRem(48),
  lg: calcRem(96),
  xl: calcRem(160),
  xxl: calcRem(200),
};

const verticalGap = {
  base: `${calcRem(8)} 0 ${calcRem(8)} 0`,
};

const size = {
  font,
  padding,
  margin,
  gap,
  verticalGap,
};

export default size;

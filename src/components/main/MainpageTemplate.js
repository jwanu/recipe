import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';

const MainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`flex-direction: row;`}
  ${media.md`flex-wrap: wrap;`}
`;

const MainpageTemplate = ({ children }) => {
  return <MainTemplate>{children}</MainTemplate>;
};

export default MainpageTemplate;

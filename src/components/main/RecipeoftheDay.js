import React from 'react';
import styled from 'styled-components';
import { media, size } from '../../styles';
import { Box1 } from '../../styles/components';

const RecipeoftheDayTemplate = styled.div`
    display: flex;
    flex-direction: column;
    ${media.md`margin-right: 16px;`}
    ${media.md`width: calc(calc(100% - 16px) / 2);`}
    ${media.md`height: 380px;`}
    ${media.lg`width:608px;`}
    ${media.xl`width:576px;`}
    transition: all .2s ease;
`;

const SectionName = styled.h2`
  font-weight: bold;
  margin-bottom: 8px;
`;

const BannerBox = styled.div`
  ${Box1}
  width: 100%;
  height: 80vw;
  ${media.md`height: 100%;`}
  padding: 16px;
  position: relative;
  background-image: url('https://webknox.com/recipeImages/716429-556x370.jpg');
  background-size: cover;
  display: flex;
  align-items: flex-end;
  &::before {
    content: '';
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  div {
    ${Box1}
    width: 100%;
    height: 20vw;
    z-index: 1;
  }
`;

const RecipeoftheDay = () => {
  return (
    <RecipeoftheDayTemplate>
      <SectionName>Recipe of the Day</SectionName>
      <BannerBox>
        <div></div>
      </BannerBox>
    </RecipeoftheDayTemplate>
  );
};

export default RecipeoftheDay;

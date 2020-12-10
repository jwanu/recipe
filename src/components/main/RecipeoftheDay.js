import React from 'react';
import styled from 'styled-components';
import { color, media, size } from '../../styles';
import { Box1 } from '../../styles/components';

const RecipeoftheDayTemplate = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`margin-right: 16px;`}
  ${media.md`width: calc(calc(100% - 16px) / 2);`}
    ${media.xl`width: calc(calc(calc(calc(100% - 32px) / 3) * 2) + 16px);`}
    transition: all .2s ease;
`;

const SectionName = styled.h2`
  color: ${color.gray[8]};
  text-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
  font-weight: bold;
  margin-bottom: 8px;
`;

const BannerBox = styled.div`
  border-radius: 40px;
  box-shadow: 6px 6px 6px #d8dade, -6px -6px 6px #ffffff;
  overflow: hidden;
  width: 100%;
  height: 80vw;
  ${media.md`height: calc(calc(100vw - 64px) / 2);`}
  ${media.lg`height: calc(calc(100vw - 288px) / 2);`}
  ${media.xl`height:272px;`}
  padding: 16px;
  position: relative;
  background-image: url('images/recipeday.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  &::before {
    content: '';
    background: linear-gradient(rgba(0, 0, 0, 0), 70%, rgba(0, 0, 0, 0.1));
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &:hover {
  }
`;

const RecipeoftheDay = () => {
  return (
    <RecipeoftheDayTemplate>
      <SectionName>Recipe of the Day</SectionName>
      <BannerBox></BannerBox>
    </RecipeoftheDayTemplate>
  );
};

export default RecipeoftheDay;

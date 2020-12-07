import React from 'react';
import styled from 'styled-components';
import { media, size } from '../../styles';
import { Box1 } from '../../styles/components';

const RecipeListTemplate = styled.div`
  position: relative;
  width: 100%;
  margin-top: 16px;
  h2 {
    font-weight: bold;
    margin-bottom: 8px;
  }
  .sliderContainer {
    width: 100%;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, rgba(246, 248, 252, 0), 95%, rgba(246, 248, 252, 1));
      pointer-events: none;
      z-index: 1;
      ${media.lg`display: none;`}
    }

    .slider {
      display: flex;
      flex-wrap: nowrap;
      width: fit-content;
      ${media.md`justify-content: space-between;`}

      .slideItem {
        ${Box1}
        width: 36vw;
        height: 36vw;
        ${media.md`width: 162px;`}
        ${media.md`height: 162px;`}
        ${media.lg`width: 218px;`}
        ${media.lg`height: 218px;`}
        & + .slideItem {
          margin-left: 16px;
        }
      }
    }
  }
`;

const RecipeList = ({ title }) => {
  return (
    <RecipeListTemplate>
      <h2>{title}</h2>
      <div className="sliderContainer">
        <div className="slider">
          <div className="slideItem">레시피1</div>
          <div className="slideItem">레시피2</div>
          <div className="slideItem">레시피3</div>
          <div className="slideItem">레시피4</div>
          <div className="slideItem">레시피5</div>
        </div>
      </div>
    </RecipeListTemplate>
  );
};

export default RecipeList;

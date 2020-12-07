import React from 'react';
import styled from 'styled-components';
import { media, size } from '../../styles';
import { Box1 } from '../../styles/components';

const RecipeListTemplate = styled.div`
  position: relative;
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
      background: linear-gradient(90deg, rgba(246, 248, 252, 0), 85%, rgba(246, 248, 252, 1));
      pointer-events: none;
      z-index: 1;
      ${media.md`display: none;`}
    }

    .slider {
      display: flex;
      flex-wrap: nowrap;
      width: fit-content;

      .slideItem {
        ${Box1}
        width: 36vw;
        height: 36vw;
        ${media.md`width: 168px;`}
        ${media.md`height: 168px;`}
        ${media.lg`width: 224px;`}
        ${media.lg`height: 224px;`}
        & + .slideItem {
          margin-left: 8px;
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
        </div>
      </div>
    </RecipeListTemplate>
  );
};

export default RecipeList;

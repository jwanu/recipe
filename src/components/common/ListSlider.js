import React from 'react';
import styled from 'styled-components';
import { media, size } from '../../styles';
import { Box1 } from '../../styles/components';
import RecipeList from './RecipeList';

const ListSliderTemplate = styled.div`
  position: relative;
  width: 100%;
  margin-top: 16px;
  h2 {
    font-weight: bold;
    margin-bottom: 8px;
  }
  .sliderContainer {
    width: 100%;
    overflow-y: visible;
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
      background: linear-gradient(90deg, rgba(246, 248, 252, 0), 98%, rgba(246, 248, 252, 1));
      pointer-events: none;
      z-index: 1;
      ${media.lg`display: none;`}
    }

    .slider {
      display: flex;
      flex-wrap: nowrap;
      width: fit-content;
      overflow: visible;
      padding-bottom: 16px;

      .slideItem {
        ${Box1}
        width: calc(calc(100vw - 80px) / 4);
        height: calc(calc(100vw - 80px) / 4);
        ${media.lg`width: calc(calc(100vw - 320px) / 4);`}
        ${media.lg`height: calc(calc(100vw - 320px) / 4);`}
        ${media.xl`width: 206px;`}
        ${media.xl`height: 206px;`}
        box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
        &:hover {
          box-shadow: 3px 3px 6px #d8dade, -3px -3px 6px #ffffff;
        }
        & + .slideItem {
          margin-left: 16px;
        }
        ${media.md`display: flex;`}
        ${media.md`flex-direction: column;`}

        .image {
          height:100%;
          ${media.md`height: 70%;`}
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info{
          display: none;
          ${media.md`display:block;`}
          padding: 8px;
          font-size: ${size.font.xs};
          ${media.lg`font-size: ${size.font.sm};`}
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

const ListSlider = ({ title, list }) => {
  return (
    <ListSliderTemplate>
      <h2>{title}</h2>
      <div className="sliderContainer">
        <div className="slider">
          {list.map((item) => (
            <div className="slideItem">
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="info">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ListSliderTemplate>
  );
};

export default ListSlider;

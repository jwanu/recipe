import React from 'react';
import { useCookies } from 'react-cookie';
import { RiDeleteBinLine, RiTimerLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color, size } from '../../styles';
import Button from './Button';

const RecipeListTemplate = styled.div`
  width: 100%;
  h2 {
    font-weight: bold;
  }
  ul {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    li {
      & + li {
        margin-top: 16px;
      }
      a {
        display: flex;
        .thumbnail {
          width: 88px;
          height: 88px;
          flex-shrink: 0;
          margin-right: 8px;
          border-radius: 10px;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 4px;
          h3 {
            font-weight: bold;
          }
          .ratingSection {
            display: flex;
            justify-content: space-between;
          }
          .readyTime {
            margin-top: 4px;
            display: flex;
            align-items: center;
            font-size: ${size.font.sm};
            font-weight: bold;
            color: ${color.orange[9]};
            svg {
              font-size: 20px;
            }
          }
        }
        .func {
          margin-left: 24px;
          display: flex;
          align-items: center;
        }
      }
    }
    .emptyHolder {
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${color.gray[5]};
      font-size: ${size.font.lg};
    }
  }
`;

const StarRating = styled.div`
  display: inline-block;
  unicode-bidi: bidi-override;
  margin-top: 4px;
  color: ${color.gray[3]};
  font-size: 20px;
  height: 20px;
  width: auto;
  position: relative;
  .ratingUpper {
    width: ${(props) => props.width}%;
    color: ${color.orange[5]};
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .ratingLower {
    padding: 0;
    display: flex;
    z-index: 0;
  }
`;

const RecipeList = ({ title, data, loading, bookmark }) => {
  const [cookies, setCookie] = useCookies(['bookmarked']);
  const removeSavedBookmark = (id,e) => {
    e.preventDefault();
    let cookieTemp = cookies.bookmarked.filter((bookmark) => bookmark.id !== id);
    setCookie('bookmarked', cookieTemp, { path: '/' });
  };
  if (loading) return <RecipeListTemplate></RecipeListTemplate>;
  return (
    <RecipeListTemplate>
      <h2>{title}</h2>
      <ul>
        {data.length > 0? (data.results.map((item) => (
          <li key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <div className="thumbnail">
                <img src={item.image} />
              </div>
              <div className="info">
                <h3>{item.title}</h3>
                <div className="ratingSection">
                  <StarRating width={item.spoonacularScore || item.score}>
                    <div className="ratingUpper">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <div className="ratingLower">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </StarRating>
                  <div className="readyTime">
                    <RiTimerLine />
                    {item.readyInMinutes} Minutes
                  </div>
                </div>
                <div className="servings">{item.servings} servings</div>
              </div>
              {bookmark && (
                <div className="func">
                  <Button onClick={(e) => removeSavedBookmark(item.id, e)}>
                    <RiDeleteBinLine />
                  </Button>
                </div>
              )}
            </Link>
          </li>
        ))) : (<div className="emptyHolder">{title} is Empty</div>)}
      </ul>
    </RecipeListTemplate>
  );
};

export default RecipeList;

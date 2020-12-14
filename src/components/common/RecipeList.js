import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipeListTemplate = styled.div`
  width: 100%;
`;

const ListItemTemplate = styled.ul`
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
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        margin-right: 8px;
        border-radius: 10px;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .info {
        flex: 1;
        h3 {
          font-weight: bold;
        }
      }
    }
  }
`;

const RecipeList = ({ title, list }) => {
  return (
    <RecipeListTemplate>
      <h2>{title}</h2>
      <ListItemTemplate>
        {list.map((item) => (
          <li>
            <Link to={`/recipe/${item.id}`}>
              <div className="thumbnail">
                <img src={item.image} />
              </div>
              <div className="info">
              <h3>{item.title}</h3>

              </div>
            </Link>
          </li>
        ))}
      </ListItemTemplate>
    </RecipeListTemplate>
  );
};

export default RecipeList;

// {item.id}
// {item.title}
// {item.image}
// {item.imageType}
// {item.calories}
// {item.carbs}
// {item.fat}
// {item.protein}
// lowfat 같은거하려면 요청에 sort랑 sortDirection 봐야할듯.
//

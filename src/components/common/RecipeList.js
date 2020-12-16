import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipeListTemplate = styled.div`
  width: 100%;
  h2 {
    font-weight: bold;
  }
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
          object-fit: cover;
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

const RecipeList = ({ title, data, loading }) => {
  if ( loading ) 
  return (
    <RecipeListTemplate>
      <h2>{title}</h2>
      <ListItemTemplate>
      <li>
            <a>
              <div className="thumbnail" />
              <div className="info">
                <h3/>
              </div>
            </a>
          </li>
      </ListItemTemplate>
    </RecipeListTemplate>
  )
  return (
    <RecipeListTemplate>
      <h2>{title}</h2>
      <ListItemTemplate>
        {data.results.map((item) => (
          <li key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <div className="thumbnail">
                <img src={item.image} />
              </div>
              <div className="info">
                <h3>{item.title}</h3>
                <div>
                  Score: {item.spoonacularScore}<br />
                  RedayInMinutes: {item.readyInMinutes} <br />
                  Servings: {item.servings}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ListItemTemplate>
    </RecipeListTemplate>
  );
};

export default RecipeList;

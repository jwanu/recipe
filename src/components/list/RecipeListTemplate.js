import React from "react";
import styled from "styled-components";
import { Box1 } from "../../styles/components";

const ListTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
`;

const RecipeListItem = styled.div`
  height: 120px;
  display: flex;
`;

const RecipeListTemplate = ({ about }) => {
  return (
    <ListTemplate>
      <RecipeListItem>
          <img src="https://webknox.com/recipeImages/716429-556x370.jpg" alt="test" />
          <h2>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h2>
          {about}레시피리스트</RecipeListItem>
      <RecipeListItem>고우</RecipeListItem>
    </ListTemplate>
  );
};

export default RecipeListTemplate;

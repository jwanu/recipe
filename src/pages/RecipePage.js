import React, { useState } from 'react';
import HeaderTemplate from '../components/header/HeaderTemplate';
import { useParams } from 'react-router-dom';
import RecipeTemplate from '../components/recipe/RecipeTemplate';

const RecipePage = () => {
  const { id } = useParams();

  return (
    <>
      <HeaderTemplate search back bookmark share id={id} />
      <RecipeTemplate id={id} />
    </>
  );
};
export default RecipePage;

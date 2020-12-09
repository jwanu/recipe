import React from 'react';
import RecipeList from '../components/common/RecipeList';
import LinkIcons from '../components/main/LinkIcons';
import MainpageTemplate from '../components/main/MainpageTemplate';
import RecipeoftheDay from '../components/main/RecipeoftheDay';

const mainPage = () => {
  return (
    <MainpageTemplate>
      <RecipeoftheDay />
      <LinkIcons />
      <RecipeList title="Bookmarked" />
      <RecipeList title="History" />
    </MainpageTemplate>
  );
};

export default mainPage;

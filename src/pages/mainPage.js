import React from 'react';
import ListSlider from '../components/common/ListSlider';
import HeaderTemplate from '../components/header/HeaderTemplate';
import LinkIcons from '../components/main/LinkIcons';
import MainpageTemplate from '../components/main/MainpageTemplate';
import RecipeoftheDay from '../components/main/RecipeoftheDay';

const mainPage = () => {
  return (
    <>
      <HeaderTemplate logo search />
      <MainpageTemplate>
        <RecipeoftheDay />
        <LinkIcons />
      </MainpageTemplate>
    </>
  );
};

export default mainPage;

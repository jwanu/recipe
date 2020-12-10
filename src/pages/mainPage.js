import React from 'react';
import ListSlider from '../components/common/ListSlider';
import LinkIcons from '../components/main/LinkIcons';
import MainpageTemplate from '../components/main/MainpageTemplate';
import RecipeoftheDay from '../components/main/RecipeoftheDay';

const mainPage = () => {
  return (
    <MainpageTemplate>
      <RecipeoftheDay />
      <LinkIcons />
      <ListSlider title="Bookmarked" list={[{title:'북마크아이템1'},{title:'북마크아이템2'},{title:'북마크아이템3'},{title:'북마크아이템4'},{title:'북마크아이템5'}]} />
      <ListSlider title="History" list={[{title:'히스토리1'},{title:'히스토리2'}]} />
    </MainpageTemplate>
  );
};

export default mainPage;

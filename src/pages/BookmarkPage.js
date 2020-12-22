import React from 'react';
import RecipeList from '../components/common/RecipeList';
import { useCookies } from 'react-cookie';

const BookmarkPage = () => {
  const [cookies] = useCookies(['bookmarked']);
  let data = cookies.bookmarked;
  if(!data) data = [];
  data.map(v => v.image = `https://spoonacular.com/recipeImages/${v.id}-90x90`);
  return (
    <>
      <RecipeList
        title="Bookmarked"
        data={{ results: data }}
        bookmark
      />
    </>
  );
};

export default BookmarkPage;

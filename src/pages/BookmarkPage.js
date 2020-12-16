import React from 'react';
import RecipeList from '../components/common/RecipeList';

const BookmarkPage = () => {
  return (
    <>
      <RecipeList
        title="Bookmarked"
        data={{
          results: [
            {
              id: 716429,
              image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
              title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
            },
            {
              id: 711312,
              image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
              title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
            },
          ],
        }}
      />
    </>
  );
};

export default BookmarkPage;

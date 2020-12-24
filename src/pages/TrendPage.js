import React from 'react';
import RecipeList from '../components/common/RecipeList';

const TrendPage = () => {
  return (
    <div>
      <RecipeList
        title={'Recently Uploaded Recipes(Mock data)'}
        data={{
          results: [
            {
              id: 716429,
              calories: 584,
              carbs: '84g',
              fat: '20g',
              image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
              imageType: 'jpg',
              protein: '19g',
              title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
              score: 80,
              servings: 3,
              readyInMinutes: 45,
            },
            {
              id: 715538,
              calories: 521,
              carbs: '69g',
              fat: '10g',
              image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
              imageType: 'jpg',
              protein: '35g',
              title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
              score: 60,
              servings: 2,
              readyInMinutes: 30,
            },
            {
              id: 716429,
              calories: 584,
              carbs: '84g',
              fat: '20g',
              image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
              imageType: 'jpg',
              protein: '19g',
              title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
              score: 90,
              servings: 4,
              readyInMinutes: 20,
            },
            {
              id: 715538,
              calories: 521,
              carbs: '69g',
              fat: '10g',
              image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
              imageType: 'jpg',
              protein: '35g',
              title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
              score: 80,
              servings: 3,
              readyInMinutes: 50,
            },
          ],
        }}
      />
    </div>
  );
};

export default TrendPage;

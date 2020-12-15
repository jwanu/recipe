import React from 'react';
import RecipeList from '../components/common/RecipeList';
import LinkIcons from '../components/main/LinkIcons';

const TrendPage = () => {
    return (
        <div>
            <LinkIcons />
            <RecipeList title={'Recently Uploaded Recipes'} list={[
            {
              id: 716429,
              calories: 584,
              carbs: '84g',
              fat: '20g',
              image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
              imageType: 'jpg',
              protein: '19g',
              title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
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
            },
          ]} />
        </div>
    );
};

export default TrendPage;
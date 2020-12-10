import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeList from '../components/common/RecipeList';

const SearchPage = ({ query }) => {
  const [searchResult, setSearchResult] = useState({
    offset: 0,
    number: 2,
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
    ],
    totalResults: 86,
  });
  const getSearchResult = async () => {
    try {
      //   const response = await axios.get(
      //     `https://api.spoonacular.com/recipes/complexSearch?number=2&query=${query}&apiKey=49cb5e7e6be34a2bbcfb86a9603d5926`
      //   );
      //   setSearchResult(response.data);

      //FAKE DATA
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <div>
      <h1>할로</h1>
      <RecipeList title={`Result for '${query}'`} list={searchResult.results} />
    </div>
  );
};

export default SearchPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeTemplate from '../components/recipe/RecipeTemplate';

const API_KEY = '&apiKey=49cb5e7e6be34a2bbcfb86a9603d5926';

const RecipePage = ({ id }) => {
  const [detail, setDetail] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [equip, setEquip] = useState(null);
  const [price, setPrice] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [instructions, setInstructions] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searching = async () => {
      try {
        setDetail(null);
        setSimilar(null);
        setEquip(null);
        setPrice(null);
        setIngredients(null);
        setInstructions(null);
        setLoading(true);
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/716429/information?includeNutrition=true${API_KEY}`
        );
        setDetail(response.data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };

    searching();
  }, []);

  if (detail)
    return (
      <RecipeTemplate>
        <h1>{detail.title}</h1>
      </RecipeTemplate>
    );
};

export default RecipePage;

import axios from 'axios';

export const getSearchResult = async ({query}) => {
  try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=8&query=${query}&apiKey=49cb5e7e6be34a2bbcfb86a9603d5926`
      );
      return response.data;
  } catch (error) {
    console.error(error);
  }
};

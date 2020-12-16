import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import RecipeList from '../components/common/RecipeList';

const apiKey = process.env.REACT_APP_API_KEY.replace(';', '');
const getSearchResult = async ({ query }) => {
  const res = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?number=20&instructionsRequired=true&addRecipeInformation=true&query=${query}&apiKey=${apiKey}`
  );
  return res.data;
};

const SearchResult = ({ query }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: getSearchResult, query, watch: query });
  if (isLoading) return <div className="exception">Loading..</div>;
  if (error) return <div className="exception">Something went wrong</div>;
  if (data) return <RecipeList title={`Result for '${query}'`} data={data} />;
  return null;
};

export default SearchResult;

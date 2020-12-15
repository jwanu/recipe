import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import { Link } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY.replace(';', '');
const getAutocomplete = async ({ query }) => {
  const res = await axios.get(
    `https://api.spoonacular.com/recipes/autocomplete?number=5&query=${query}&apiKey=${apiKey}`
  );
  return res.data;
};

const Autocomplete = ({ query }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: getAutocomplete, query, watch: query });
  if (isLoading) return <div className="exception">Loading..</div>;
  if (error) return <div className="exception">Something went wrong</div>;
  if (data)
    return (
      <ul>
        {data.map((keyword) => (
          <li key={keyword.id}>
            <Link to={`/recipe/${keyword.id}`} value={keyword.title}>
              <div className="image">
                <img src={`https://spoonacular.com/recipeImages/${keyword.id}-90x90.jpg`} alt="recipeImage" />
              </div>
              {keyword.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  return null;
};

export default Autocomplete;

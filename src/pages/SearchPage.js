import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderTemplate from '../components/header/HeaderTemplate';
import SearchResult from '../api/SearchResult';

const SearchPage = () => {
  let { query } = useParams();
  return (
    <div>
      <HeaderTemplate search back />
      <SearchResult query={query} />
    </div>
  );
};

export default SearchPage;

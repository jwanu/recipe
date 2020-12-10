import React, { useEffect, useState } from 'react';
import { color } from '../../styles';
import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const SearchTemplate = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  border-radius: 40px;
  background: #f6f8fc;
  box-shadow: inset 4px 4px 6px #d8dade, inset -6px -6px 6px #ffffff;
  &:hover { box-shadow: inset 2px 2px 3px #d8dade, inset -2px -2px 3px #ffffff; }
  width: 240px;
  min-height: 40px;
  transition: all 0.2s ease;
  overflow: hidden;
  z-index: 10;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    height: 40px;
    svg {
      color: ${color.gray[5]};
    }
    input {
      margin-left: 8px;
      flex: 1;
      color: ${color.gray[6]};
      font-weight: bold;
      &:focus {
        color: ${color.gray[7]};
      }
    }
  }
  .autocompleteBox {
    display: none;
    li {
      color: ${color.gray[6]};
      transition: all 0.2s ease;
    }
  }
  &:focus-within {
    width: 100%;
    border-radius: 20px;
    background: #f6f8fc;
    box-shadow: 8px 8px 14px #d8dade, -8px -8px 14px #ffffff;
    svg {
      color: ${color.gray[7]};
    }
    .autocompleteBox {
      display: block;
      ul {
        li {
          color: ${color.gray[8]};
          a {
            display: block;
            padding: 16px 40px;
          }
          &:hover {
            background: ${color.gray[1]};
          }
        }
      }
    }
  }
`;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [autocomp, setAutocomp] = useState([]);

  useEffect(() => {
    autocomplete();
  }, [searchQuery]);

  const autocomplete = async () => {
    try {
      // const response = await axios.get(`https://api.spoonacular.com/recipes/autocomplete?number=5&query=${searchQuery}&apiKey=49cb5e7e6be34a2bbcfb86a9603d5926`);
      // setAutocomp(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const onChange = (e) => {
    e.target.value ? setSearchQuery(e.target.value) : setSearchQuery('');
    // e.target.value && //밸류가 있고 인풋이 포커스 일때 아래에 자동완성을 띄워야되는데..
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('동작?');
    this.props.history.push(`/search/${searchQuery}`);
  };

  return (
    <SearchTemplate>
      <form onSubmit={onSubmit}>
        <RiSearchLine />
        <input type="search" placeholder="dish, ingredient..." onChange={onChange} value={searchQuery} />
      </form>
      <div className="autocompleteBox">
        <ul>
          {console.log(autocomp)}
          {autocomp.map((autocom) => (
            <li key={autocom.id}>
              <Link to={`/recipe/${autocom.id}`}>{autocom.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </SearchTemplate>
  );
};

export default Search;

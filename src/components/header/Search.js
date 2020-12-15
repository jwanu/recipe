import React, { useState } from 'react';
import { color } from '../../styles';
import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import Autocomplete from '../../modules/Autocomplete';

const SearchTemplate = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  border-radius: 40px;
  background: #f6f8fc;
  box-shadow: inset 4px 4px 6px #d8dade, inset -6px -6px 6px #ffffff;
  &:hover {
    box-shadow: inset 2px 2px 3px #d8dade, inset -2px -2px 3px #ffffff;
  }
  width: 240px;
  min-height: 40px;
  transition: all 0.2s ease;
  overflow: hidden;
  z-index: 10;
  .searchField {
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
            width: 100%;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            cursor: pointer;
            .image {
              height: 32px;
              width: 32px;
              border-radius: 10px;
              overflow: hidden;
              margin-right: 12px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
          &:hover {
            background: ${color.gray[1]};
          }
        }
      }
      .exception {
        padding: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  let history = useHistory();

  const onChange = (e) => {
    e.target.value ? setSearchQuery(e.target.value) : setSearchQuery('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.target[0].blur();
    history.push(`/search/${searchQuery}`);
  };

  return (
    <SearchTemplate>
      <form onSubmit={onSubmit}>
        <div className="searchField">
          <RiSearchLine />
          <input type="search" placeholder="dish, ingredient..." onChange={onChange} value={searchQuery} />
        </div>
        <div className="autocompleteBox">
          <Autocomplete query={searchQuery} />
        </div>
      </form>
    </SearchTemplate>
  );
};

export default Search;

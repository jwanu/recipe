import React from "react";
import { color } from '../../styles';
import styled from "styled-components";
import { RiSearchLine } from 'react-icons/ri';

const SearchTemplate = styled.div`
  display: inline-flex;
  align-items: center;
  background: #fff;
  border: 1px solid ${color.gray[2]};
  border-radius: 40px;
  width: 240px;
  height: 40px;
  padding: 0 16px;
  svg {
    color: ${color.gray[5]}
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
`;

const Search = () => {
  return (
    <>
<SearchTemplate>
  <RiSearchLine />
  <input type="search" placeholder="dish, ingredient..." />
</SearchTemplate>
    </>
  );
};

export default Search;

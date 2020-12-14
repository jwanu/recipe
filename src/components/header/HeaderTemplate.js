import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Search from './Search';
import { RiArrowLeftLine, RiBookmarkLine } from 'react-icons/ri';

const HeaderTemp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 16px;
`;

const HeaderTemplate = ({ logo, title, search, back, bookmark }) => {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const bookmarking = () => {
    //save to my bookmark
  }

  return (
    <HeaderTemp> {/* 버튼부분이랑 검색부분 나누기! 디브로*/}
      {logo && <div>LOGO</div>}
      {back && (
        <Button onClick={goBack}>
          <RiArrowLeftLine />
        </Button>
      )}
      {bookmark && (
        <Button onClick={bookmarking}>
          <RiBookmarkLine />
        </Button>
      )}
      {title && <h1>{title}</h1>}
      {search && <Search />}
    </HeaderTemp>
  );
};

export default HeaderTemplate;

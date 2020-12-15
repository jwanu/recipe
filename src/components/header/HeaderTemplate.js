import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Search from './Search';
import { RiArrowLeftLine, RiBookmarkLine } from 'react-icons/ri';

const HeaderTemp = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  .iconArea {
    display: flex;
  }
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
    <HeaderTemp>
      <div className="iconArea">
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
      </div>
      {title && <h1>{title}</h1>}
      {search && <Search />}
    </HeaderTemp>
  );
};

export default HeaderTemplate;

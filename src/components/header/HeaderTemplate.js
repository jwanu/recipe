import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Search from './Search';
import { RiArrowLeftLine, RiBookmarkFill, RiBookmarkLine, RiShareLine } from 'react-icons/ri';
import Share from './Share';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

const HeaderTemp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  .iconArea {
    display: flex;
  }
  .iconArea {
    .logo {
      font-size: 40px;
      font-weight: bold;
      color: #f6f8fc;
      text-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
    }
  }
`;

const HeaderTemplate = ({ logo, search, back, bookmark, share }) => {
  const { id, title, score, readyInMinutes, servings } = useSelector((state) => ({
    id: state.recipeNow.id,
    title: state.recipeNow.title,
    score: state.recipeNow.score,
    readyInMinutes: state.recipeNow.readyInMinutes,
    servings: state.recipeNow.servings,
  }));
  const [cookies, setCookie] = useCookies(['bookmarked']);
  const [shareVisible, setShareVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(cookies.bookmarked ? cookies.bookmarked.some((recipe) => recipe.id === id) : false);
  const historyConfig = {
    basename: 'recipp',
  };
  const history = createBrowserHistory(historyConfig);

  const addBookmark = () => {
    let cookieTemp = cookies.bookmarked;
    if (!cookieTemp) cookieTemp = [];
    cookieTemp.push({ id: id, title: title, score: score, readyInMinutes: readyInMinutes, servings: servings, savedTime: Date.now() });
    setCookie('bookmarked', cookieTemp, { path: '/' });
    setIsSaved(true);
  };
  const removeBookmark = () => {
    let cookieTemp = cookies.bookmarked.filter((bookmark) => bookmark.id !== id);
    setCookie('bookmarked', cookieTemp, { path: '/' });
    setIsSaved(false);
  };

  const bookmarkToggle = () => {
    if (isSaved) return removeBookmark();
    return addBookmark();
  };

  const shareToggle = () => setShareVisible(!shareVisible);

  return (
    <HeaderTemp>
      <div className="iconArea">
        {logo && (
          <Link to={'/'} className="logo">
            RECIPEDIA
          </Link>
        )}
        {back && (
          <Button
            onClick={() => {
              history.goBack();
            }}
          >
            <RiArrowLeftLine />
          </Button>
        )}
        {bookmark && (
          <Button onClick={bookmarkToggle} active={isSaved}>
            {isSaved ? <RiBookmarkFill /> : <RiBookmarkLine />}
          </Button>
        )}
        {share && (
          <Button onClick={shareToggle} active={shareVisible}>
            <RiShareLine />
          </Button>
        )}
      </div>
      {shareVisible && <Share />}
      {search && <Search />}
    </HeaderTemp>
  );
};

export default HeaderTemplate;

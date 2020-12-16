import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Search from './Search';
import { RiArrowLeftLine, RiBookmarkFill, RiBookmarkLine, RiShareLine } from 'react-icons/ri';
import Share from './Share';
import { useCookies } from 'react-cookie';

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
`;

const HeaderTemplate = ({ id, logo, search, back, bookmark, share }) => {
  const [cookies, setCookie] = useCookies(['bookmarked','visited']);
  const [shareVisible, setShareVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(cookies.bookmarked? cookies.bookmarked.some((recipe) => recipe.id === id) : false);
  let history = useHistory();

  //History기록 만들기.
  // useEffect(() => {
  //   let cookieTemp = cookies.visited;
  //   if (cookieTemp) cookieTemp = [];
  //   cookies.visited.filter((record) => record.id !== id)
  // },[]);

  const addBookmark = () => {
    let cookieTemp = cookies.bookmarked;
    if (!cookieTemp) cookieTemp = [];
    cookieTemp.push({id: id, title: 'title'});
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
        {logo && <div>LOGO</div>}
        {back && (
          <Button onClick={() => history.goBack()}>
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

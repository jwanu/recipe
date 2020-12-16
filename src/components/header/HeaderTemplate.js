import React, { useState } from 'react';
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
  const [shareVisible, setShareVisible] = useState(false);
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const [cookies, setCookie] = useCookies(['bookmarked']);

  //지금레시피가 북마크쿠키에 있는지 검증
  const isSaved = (id) => {
    let cookieT = cookies.bookmarked;
    return cookieT && cookieT.some((recipe) => recipe.id === id);
  }

  //북마크토글버튼 누르면 쿠키템프가 없으면 빈배열 넣고 북마크추가,
  //지금 페이지가 저장되어있으면 삭제해줘야됨 리팩리팩!
  let cookieTemp = cookies.bookmarked;
  const addBookmark = () => {
    cookieTemp.push({ id: id, title: 'title', image: 'image' });
    setCookie('bookmarked', cookieTemp, { path: '/' });
  };
  const removeBookmark = () => {
    cookieTemp = cookieTemp.filter((bookmark) => bookmark.id !== id);
    setCookie('bookmarked', cookieTemp, { path: '/' });
  };

  const bookmarkToggle = () => {
    let cookieTemp = cookies.bookmarked;
    if (!cookieTemp) {
      cookieTemp = [];
      return addBookmark();
    }
    isSaved(id) ? removeBookmark() : addBookmark();
  };

  const shareToggle = () => setShareVisible(!shareVisible);

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
          <Button onClick={bookmarkToggle} active={isSaved(id)}>
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

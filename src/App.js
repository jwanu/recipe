import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { media } from './styles';
import Sidebar from './components/sidebar/Sidebar';
import TrendPage from './pages/TrendPage';
import BookmarkPage from './pages/BookmarkPage';
import MyPage from './pages/MyPage';
import mainPage from './pages/mainPage';
import SearchPage from './pages/SearchPage';
import RecipePage from './pages/RecipePage';

const RoutePage = styled.div`
  position: relative;
  max-width: 100%;
  overflow: visible;
  margin: 16px;
  transition: all 0.2s ease;
  ${media.lg`margin: 0;`}
  ${media.lg`top: 24px;`}
  ${media.lg`padding-top: 28px;`}
  ${media.lg`width: calc(100% - 272px);`}
  ${media.lg`transform: translateX(248px);`}
  ${media.xl`margin: 0 auto;`}
  ${media.xl`width: 872px;`}
  ${media.xl`transform: translateX(154px);`}
`;

function App() {
  return (
    <>
      <Sidebar />
      <RoutePage>
          <Route component={RecipePage} path={`${process.env.PUBLIC_URL}/recipe/:id`} />
          <Route component={TrendPage} path={`${process.env.PUBLIC_URL}/trend`} />
          <Route component={BookmarkPage} path={`${process.env.PUBLIC_URL}/bookmark`} />
          <Route component={MyPage} path={`${process.env.PUBLIC_URL}/mypage`} />
          <Route component={SearchPage} path={`${process.env.PUBLIC_URL}/search/:query`} />
          <Route component={mainPage} exact path={`${process.env.PUBLIC_URL}/`} />
      </RoutePage>
    </>
  );
}

export default App;

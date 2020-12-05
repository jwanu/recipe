import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { media, size, theme } from "./styles";
import Sidebar from "./components/sidebar/Sidebar";
import ArticlesPage from "./pages/ArticlesPage";
import BookmarkPage from "./pages/BookmarkPage";
import LatestPage from "./pages/LatestPage";
import MyPage from "./pages/MyPage";
import mainPage from "./pages/mainPage";
import HeaderTemplate from "./components/header/HeaderTemplate";

const RoutePage = styled.div`
  position: relative;
  margin: 16px;
  transition: all 1s ease;
  ${media.md`margin: 0 auto`};
  ${media.xl`margin-left: 0`};
  ${media.md`min-width: 480px`}
  ${media.xl`min-width: 800px`}
  ${media.xl`max-width: 960px`}
  ${media.md`top: 24px`}
  ${media.md`width: 696px`}
  ${media.lg`width: 920px`}
  ${media.xl`width: auto`}
  ${media.xl`left:0`}
  ${media.xl`transform: translateX(344px)`}
  ${media.md`padding-top: 28px`}
`;

function App() {
  return (
    <>
      <Sidebar />
      <RoutePage>
        <HeaderTemplate />
        <Route component={ArticlesPage} path="/article" />
        <Route component={BookmarkPage} path="/bookmark" />
        <Route component={LatestPage} path="/latest" />
        <Route component={MyPage} path="/mypage" />
        <Route component={mainPage} exact path="/" />
      </RoutePage>
    </>
  );
}

export default App;

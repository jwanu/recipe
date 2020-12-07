import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { media, size, theme } from "./styles";
import Sidebar from "./components/sidebar/Sidebar";
import TrendPage from "./pages/TrendPage";
import BookmarkPage from "./pages/BookmarkPage";
import MyPage from "./pages/MyPage";
import mainPage from "./pages/mainPage";
import HeaderTemplate from "./components/header/HeaderTemplate";

const RoutePage = styled.div`
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  margin: 16px;
  transition: all 1s ease;
  ${media.md`margin: 0 auto;`}
  ${media.md`min-width: 480px;`}
  ${media.md`top: 24px;`}
  ${media.md`width: 696px;`}
  ${media.md`padding-top: 28px;`}
  ${media.lg`width: 920px;`}
  /* ${media.xl`transform: translateX(344px);`} */
  ${media.xl`transform: translateX(144px);`}
  ${media.xl`min-width: 800px;`}
  ${media.xl`max-width: 852px;`}
`;

function App() {
  return (
    <>
      <Sidebar />
      <RoutePage>
        <HeaderTemplate />
        <Route component={TrendPage} path="/trend" />
        <Route component={BookmarkPage} path="/bookmark" />
        <Route component={MyPage} path="/mypage" />
        <Route component={mainPage} exact path="/" />
      </RoutePage>
    </>
  );
}

export default App;

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
  max-width: 100%;
  overflow: hidden;
  margin: 16px;
  transition: all .2s ease;
  ${media.lg`margin: 0 auto;`}
  ${media.lg`top: 24px;`}
  ${media.lg`padding-top: 28px;`}
  ${media.lg`width: 920px;`}
  ${media.xl`width: 872px;`}
  ${media.xl`transform: translateX(154px);`}
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

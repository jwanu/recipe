import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { CookiesProvider } from 'react-cookie';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * { 
    box-sizing: border-box;
    }
  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
  }
  ol, ul, li {
    list-style: none;
  }
  body {
    font-family: "Noto Sans KR", sans-serif !important;
    background: #F6F8FC;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <GlobalStyles />
      <App />
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

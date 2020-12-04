import React from 'react';
import styled, { css } from 'styled-components';
import { media, color } from '../../styles';
import { Link, NavLink } from 'react-router-dom';

const SideTemplateBlock = styled.div`
  position: absolute;
  z-index: 1000;
  background: #fff;
  border-radius: 40px;
  padding: 28px;
  transition: all 1s ease;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.06);
  ${media.md`box-shadow: 8px 0 32px rgba(0, 0, 0, 0.06)`};
  left: 16px;
  ${media.md`left:initial`};
  right: 16px;
  ${media.md`right:initial`};
  bottom: 16px;
  ${media.md`bottom:24px`};
  ${media.md`top:24px`};
  ${media.md`width:296px`};
  ${media.md`transform:translateX(-272px)`};
  ${media.xl`transform:translateX(24px)`};
  ${media.md`&:hover {transform:translateX(24px)}`};

  .logo-area {
    display: none;
    ${media.md`display:block`};
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      border: 1px solid red;
    }
  }
`;

const SideTemplate = ({ children }) => {
  return (
    <SideTemplateBlock>
      <div className="logo-area">
        <Link to="/">SPOONS</Link>
      </div>
      <div className="menu">
        <NavLink to="/">Latest</NavLink>
        <NavLink to="/">Articles</NavLink>
        <NavLink to="/">Bookmark</NavLink>
        <NavLink to="/">My page</NavLink>
      </div>
      {children}
    </SideTemplateBlock>
  );
};

export default SideTemplate;

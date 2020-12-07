import React from "react";
import styled, { css } from "styled-components";
import { media, color, size } from "../../styles";
import { Link, NavLink } from "react-router-dom";
import {
  RiHomeFill,
  RiBookmarkFill,
  RiUserFill,
  RiFireFill,
} from "react-icons/ri";

const SideTemplateBlock = styled.div`
  position: absolute;
  z-index: 1000;
  background: #fff;
  border-radius: 40px;
  padding: 12px 24px;
  ${media.md`padding: 28px`};
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
    ${media.md`flex-direction: column`};
    ${media.md`align-items: stretch;`}
    
    a {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${color.gray[8]};
      transition: all 0.2s ease;
      position: relative;
      ${media.md`flex: initial;`}
      ${media.md`flex-direction: row; `}
      ${media.md`align-items: center;`}
      ${media.md`justify-content: flex-start;`}
      ${media.md`margin-top:16px;`}
      &::before{
        content: '';
        position: absolute;
        z-index: -1;
        top: -4px;
        left: 0;
        ${media.md`left: -8px;`}
        ${media.md`right: -8px;`}
        right: 0;
        bottom: -4px;
        opacity: 0;
        background: ${color.orange[0]};
        border-radius: 10px;
        transition: all .2s ease;
      }
      svg {
        font-size: ${size.font.lg};
        ${media.md`font-size:32px;`}
        transition: all .2s ease;
      }
      span {
        display: none;
        ${media.md`display: block;`}
        margin-top: 4px;
        ${media.md`margin: 0 12px;`}
        font-weight: 600;
        font-size: ${size.font.xs};
        ${media.md`font-size: ${size.font.sm};`}
      }
      &.active {
        svg {
          color: ${color.orange[7]};
        }
        &::before{
        opacity: 1;
      }
      }
    }
  }
`;

const SideBar = () => {
  return (
    <SideTemplateBlock>
      <div className="logo-area">
        <Link to="/">SPOONS</Link>
      </div>
      <div className="menu">
        <NavLink to="/" activeClassName={'active'}>
          <RiHomeFill />
          <span>Home</span>
        </NavLink>
        <NavLink to="/trend" activeClassName={'active'}>
          <RiFireFill />
          <span>Trend</span>
        </NavLink>
        <NavLink to="/bookmark" activeClassName={'active'}>
          <RiBookmarkFill />
          <span>Bookmark</span>
        </NavLink>
        <NavLink to="/mypage" activeClassName={'active'}>
          <RiUserFill />
          <span>Mypage</span>
        </NavLink>
      </div>
    </SideTemplateBlock>
  );
};

export default SideBar;

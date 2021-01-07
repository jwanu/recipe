import React from 'react';
import styled from 'styled-components';
import { media, color, size } from '../../styles';
import { Link, NavLink } from 'react-router-dom';
import { RiHomeFill, RiBookmarkFill, RiUserFill, RiFireFill } from 'react-icons/ri';

const SideTemplateBlock = styled.div`
  position: fixed;
  z-index: 1000;
  border-radius: 40px;
  background: linear-gradient(45deg, #ffffff, #f6f8fc);
  box-shadow: 6px 6px 10px #d8dade, -6px -6px 10px #ffffff;
  padding: 12px 24px;
  transition: all 0.5s ease;
  left: 16px;
  right: 16px;
  bottom: 16px;
  ${media.md`width: 480px;`}
  ${media.md`margin: 0 auto;`}
  ${media.lg`padding: 28px;`}
  ${media.lg`left:initial;`};
  ${media.lg`right:initial;`};
  ${media.lg`bottom:24px;`};
  ${media.lg`top:24px;`};
  ${media.lg`width:200px;`};
  ${media.lg`transform:translateX(24px);`};
  ${media.xl`width:280px;`};
  ${media.xl`margin-left:calc(calc(100% - 1216px) / 2);`};

  .logo-area {
    display: none;
    ${media.lg`display:block`};
    a {
      font-size: ${size.font.lg};
      font-weight: bold;
      color: #f6f8fc;
      text-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.lg`flex-direction: column`};
    ${media.lg`align-items: stretch;`}

    a {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${color.gray[6]};
      transition: all 0.2s ease;
      position: relative;
      ${media.lg`flex: initial;`}
      ${media.lg`flex-direction: row; `}
      ${media.lg`align-items: center;`}
      ${media.lg`justify-content: flex-start;`}
      ${media.lg`margin-top:16px;`}
      &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: -4px;
        left: 0;
        ${media.lg`left: -8px;`}
        ${media.lg`right: -8px;`}
        right: 0;
        bottom: -4px;
        opacity: 0;
        background: #f6f8fc;
        box-shadow: inset 4px 4px 10px #d8dade, inset -6px -6px 6px #ffffff;
        border-radius: 10px;
        transition: all 0.2s ease;
      }
      svg {
        font-size: ${size.font.lg};
        ${media.lg`font-size:28px;`}
        transition: all .2s ease;
      }
      span {
        display: none;
        ${media.lg`display: block;`}
        margin-top: 4px;
        ${media.lg`margin: 0 12px;`}
        font-weight: 600;
        font-size: ${size.font.xs};
        ${media.lg`font-size: ${size.font.sm};`}
      }
      &.active {
          color: ${color.gray[8]};
        &::before {
          opacity: 1;
        }
      }
      &:hover {
          color: ${color.gray[7]};
        
      }
    }
  }
`;

const SideBar = () => {
  return (
    <SideTemplateBlock>
      <div className="logo-area">
        <Link to={`${process.env.PUBLIC_URL}/`}>RECIPEDIA</Link>
      </div>
      <div className="menu">
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName={'active'}>
          <RiHomeFill />
          <span>Home</span>
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/trend`} activeClassName={'active'}>
          <RiFireFill />
          <span>Trend</span>
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/bookmark`} activeClassName={'active'}>
          <RiBookmarkFill />
          <span>Bookmark</span>
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/mypage`} activeClassName={'active'}>
          <RiUserFill />
          <span>Mypage</span>
        </NavLink>
      </div>
    </SideTemplateBlock>
  );
};

export default SideBar;

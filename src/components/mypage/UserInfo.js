import React from 'react';
import styled from 'styled-components';
import { color, media, size } from '../../styles';

const UserInfoTemplate = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`flex-direction: row;`}
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #f6f8fc;
  box-shadow: 8px 8px 10px #d8dade, -8px -8px 10px #ffffff;
  ${media.md`box-shadow: none;`}
  padding: 16px;
  .image {
    box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
    border: 4px solid transparent;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    ${media.md`width: 120px;`}
    height: 60px;
    ${media.md`height: 120px;`}
    img {
      width: 120%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${media.md`align-items: flex-start;`}
    ${media.md`margin-left: 16px;`}
    align-items: center;
    h2 {
      font-size: ${size.font.md};
      margin-top: 16px;
      font-weight: bold;
    }
    .email {
      font-size: ${size.font.sm};
      color: ${color.gray[7]};
      margin-top: 8px;
    }
    button {
      margin-top: 16px;
      box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
      border-radius: 8px;
      padding: 8px 16px;
      font-weight: bold;
      color: ${color.gray[6]};
      transition: all 0.2s ease;
      &:hover {
        box-shadow: 3px 3px 5px #d8dade, -3px -3px 5px #ffffff;
        color: ${color.gray[7]};
      }
    }
  }
`;

const UserInfo = () => {
  return (
    <UserInfoTemplate>
      <div className="image">
        <img src="https://media.tenor.com/images/188a527bae76f8a2baad0b13e2494aff/tenor.png" />
      </div>
      <div className="info">
        <h2>Kim Jwanu</h2>
        <div className="email">jwanu@github.com</div>
        <button>EDIT</button>
        <div className="infoEdit"></div>
      </div>
    </UserInfoTemplate>
  );
};

export default UserInfo;

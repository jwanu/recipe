import React from 'react';
import HeaderTemplate from '../components/header/HeaderTemplate';
import UserInfo from '../components/mypage/UserInfo';

const MyPage = () => {
  return (
    <>
      <HeaderTemplate title={'PROFILE'} />
      <UserInfo />
    </>
  );
};

export default MyPage;

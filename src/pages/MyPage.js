import React from 'react';
import ListSlider from '../components/common/ListSlider';
import HeaderTemplate from '../components/header/HeaderTemplate';
import UserInfo from '../components/mypage/UserInfo';

const MyPage = () => {
  return (
    <>
      <HeaderTemplate title={'PROFILE'} />
      <UserInfo />
        <ListSlider
          title="History"
          list={[
            {
              id: 716429,
              calories: 584,
              carbs: '84g',
              fat: '20g',
              image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
              imageType: 'jpg',
              protein: '19g',
              title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
            },
            {
              id: 715538,
              calories: 521,
              carbs: '69g',
              fat: '10g',
              image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
              imageType: 'jpg',
              protein: '35g',
              title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
            },
          ]}
        />
    </>
  );
};

export default MyPage;

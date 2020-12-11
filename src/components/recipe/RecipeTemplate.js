import React from 'react';
import styled from 'styled-components';
import {
  RiUser6Line,
  RiTimerLine,
  RiHeartLine,
  RiLeafLine,
  RiBarChartBoxLine,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';

const StyledTemplate = styled.div``;

const RecipeTemplate = ({ detail }) => {
  return (
    <StyledTemplate>
      <h1>{detail.title}</h1>
      <img src={detail.image} />
      <div className="numeralInfo">
        <div>
          <RiUser6Line />
          {detail.servings}Servings
        </div>
        <div>
          <RiMoneyDollarCircleLine />
          {detail.pricePerServing}per Serving
        </div>
        <div>
          <RiTimerLine />
          {detail.readyInMinutes}Minutes
        </div>
        <div>
          <RiHeartLine />
          {detail.aggregateLikes}Likes
        </div>
        <div>
          <RiLeafLine />
          {detail.healthScore}HealthScore
        </div>
        <div>
          <RiBarChartBoxLine />
          {detail.spoonacularScore}SpoonScore
        </div>
      </div>
      <div className="creditText">{detail.creditText}</div>
      {detail.dairyFree && <div>Dairy Free</div>} {/**특이사항아이콘 필요 */}
      {detail.glutenFree && <div>Gluten Free</div>}
      {detail.ketogenic && <div>Ketogenic</div>}
      {detail.lowFodmap && <div>lowFodmap</div>}
      {detail.vegan && <div>vegan</div>}
      <div className="dishType">
        {detail.dishTypes.map((dishType) => (
          <span key={dishType}>{dishType}</span>
        ))}
      </div>
      <div className="ingredients">
        {detail.extendedIngredients.map((ingredient) => (
          <div className="ingredient" key={ingredient.id}>
            <div className="image">
              <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} />{' '}
              {/*equipments 도 불러올수있음 *https://spoonacular.com/food-api/docs/show-images */}
            </div>
            <div className="name">{ingredient.name}</div>
            <div className="metric">
              {ingredient.measures.metric.amount}
              {ingredient.measures.metric.unitShort}
            </div>
          </div>
        ))}
      </div>
      <div className="summary">{detail.summary}</div>
      <div className="winePairing"></div>
    </StyledTemplate>
  );
};

export default RecipeTemplate;

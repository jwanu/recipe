import React from 'react';
import styled from 'styled-components';
import { color, media, size } from '../../styles';
import { RecipeDetailData, RecipeEquipmentData, RecipeInstructionData, RecipePbData } from '../../api/RecipeData';

const StyledTemplate = styled.div`
  color: ${color.gray[9]};
  display: flex;
  flex-direction: column;
  ${media.lg`flex-direction: row;`}
  ${media.lg`flex-wrap: wrap;`}
`;

const RecipeTemplate = ({ id }) => {

  return (
    <StyledTemplate>
      <RecipeDetailData id={id} />
      <RecipeEquipmentData id={id} />
      <RecipePbData id={id} />
      <RecipeInstructionData id={id} />
    </StyledTemplate>
  );
};

export default RecipeTemplate;

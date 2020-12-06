import React from 'react';
import styled from 'styled-components';
import { size } from '../../styles';
import { Box1 } from '../../styles/components';

const SectionName = styled.h2`
 font-size:${size.font.md};
 font-weight: bold;
 margin-bottom: 16px;
`;

const BannerBox = styled.div`
    ${Box1}
    width: 100%;
    height: 80vw;
    padding: 16px;
    position: relative;
    background-image: url('https://webknox.com/recipeImages/716429-556x370.jpg');
    background-size: cover;
    display: flex;
    align-items: flex-end;
    &::before{
        content: '';
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3));
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    div {
        ${Box1}
        width: 100%;
        height: 20vw;
        z-index: 1;
    }
`;

const RecipeoftheDay = () => {
    return (
        <>
        <SectionName>Recipe of the Day</SectionName>
        <BannerBox>
            <div>

            </div>
        </BannerBox>
        </>
    );
};

export default RecipeoftheDay;
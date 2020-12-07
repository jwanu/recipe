import React from 'react';
import RecipeList from '../components/common/RecipeList';
import LinkIcons from '../components/main/LinkIcons';
import RecipeoftheDay from '../components/main/RecipeoftheDay';

const mainPage = () => {
    return (
        <div>
            <RecipeoftheDay />
            <LinkIcons />
            <RecipeList title="Bookmarked"/>
        </div>
    );
};

export default mainPage;
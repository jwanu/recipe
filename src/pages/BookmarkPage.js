import React from 'react';
import RecipeList from '../components/common/RecipeList';

const BookmarkPage = () => {
    return (
       <>
       <RecipeList title="Bookmarked" list={[{title:'북마크아이템1'},{title:'북마크아이템2'}]} />
       </>
    );
};

export default BookmarkPage;
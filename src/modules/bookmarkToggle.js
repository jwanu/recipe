// import React from 'react';
// import { useCookies } from 'react-cookie';

// const [cookies, setCookie] = useCookies(['bookmarked']);
// let cookieTemp = cookies.bookmarked;

// export const isSaved = (id) => {
//   return cookieTemp.some((recipe) => recipe.id === id);
// };

// const addBookmark = (id) => {
//   cookieTemp.push({ id: id, title: 'title', image: 'image' });
//   setCookie('bookmarked', cookieTemp, { path: '/' });
// };
// const removeBookmark = (id) => {
//   cookieTemp = cookieTemp.filter((bookmark) => bookmark.id !== id);
//   setCookie('bookmarked', cookieTemp, { path: '/' });
// };

// const bookmarkToggle = (id) => {
//   cookieTemp = cookies.bookmarked;
//   if (!cookieTemp) {
//     cookieTemp = [];
//     return addBookmark(id);
//   }
//   isSaved(id)? removeBookmark(id) : addBookmark(id);
// };

// export default bookmarkToggle;

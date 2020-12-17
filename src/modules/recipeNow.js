const SET_CURRENT = 'recipeNow/SET_CURRENT';

export const setCurrent = (id, title, score, readyInMinutes, servings) => ({ type: SET_CURRENT, id, title, score, readyInMinutes, servings });

const initialState = {
  id: '',
  title: '',
  score: 0,
  readyInMinutes: 0,
  servings: 0,
};

export default function recipeNow(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        id: action.id,
        title: action.title,
        score: action.score,
        readyInMinutes: action.readyInMinutes,
        servings: action.servings,
      };
    default:
      return state;
  }
}

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  articles: []
};

const addArticle = (state, action) => {
  return {
    ...state,
    articles: [...state.articles, action.article]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      return addArticle(state, action);
    default:
      return state;
  }
};

export default reducer;

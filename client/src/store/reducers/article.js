const initialState = {
  articles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'articles':
      return state;
    default:
      return state;
  }
};

export default reducer;

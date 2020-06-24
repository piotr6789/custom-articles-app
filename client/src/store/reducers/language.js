const initialState = {
  language: 'pl'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'language':
      return state;
    default:
      return state;
  }
};

export default reducer;

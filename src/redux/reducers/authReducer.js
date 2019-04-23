const reducer = (state = {}, action) => {
  switch (action.type) {
    case "IS_LOGIN": {
      return { ...state, isLogin: action.isLogin };
    }
    case "GET_SPEECHERS": {
      return { ...state, speechers: action.speechers };
    }
    case "GET_AUTHORS": {
      return { ...state, authors: action.authors };
    }
    case "GET_PERSONALITIES": {
      return { ...state, personalities: action.personalities };
    }
    case "LOADER": {
      return { ...state, loader: action.loader };
    }
    default: {
      return state;
    }
  }
};

export default reducer;

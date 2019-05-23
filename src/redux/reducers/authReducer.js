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
    case "GET_BOOK_DETAILS": {
      return { ...state, bookDetails: action.bookDetails };
    }
    case "GET_BAYAN_DETAILS": {
      return { ...state, bayanDetails: action.bayanDetails };
    }
    case "GET_EVENT_DETAILS": {
      return { ...state, eventDetails: action.eventDetails };
    }
    case "GET_PERSONALITY_DETAILS": {
      return { ...state, personalityDetails: action.personalityDetails };
    }
    case "GET_AUTHOR": {
      return { ...state, authorName: action.authorName };
    }
    case "GET_SPEECHER": {
      return { ...state, speecherName: action.speecherName };
    }
    case "BAYANS": {
      return { ...state, bayans: action.bayans };
    }
    case "BOOKS": {
      return { ...state, books: action.books };
    }
    case "EVENTS": {
      return { ...state, events: action.events };
    }
    default: {
      return state;
    }
  }
};

export default reducer;

// import { FIREBASE_DATABASE } from "../../constants/firebase";

// export const updateUser = id => async dispatch => {
//   FIREBASE_DATABASE.ref("admin")
//     .child("accounts")
//     .child(id)
//     .once("value", snap => {
//       dispatch(getUserDetails(snap.val()));
//     });
// };

export const loader = loader => {
  return {
    type: "LOADER",
    loader
  };
};

export const speecher = speecherName => {
  return {
    type: "GET_SPEECHER",
    speecherName
  };
};

export const author = authorName => {
  return {
    type: "GET_AUTHOR",
    authorName
  };
};

export const isLogin = flag => {
  return {
    type: "IS_LOGIN",
    isLogin: flag
  };
};

// know to use

export const bayans = bayans => {
  return {
    type: "BAYANS",
    bayans
  };
};

export const books = books => {
  return {
    type: "BOOKS",
    books
  };
};

export const events = events => {
  return {
    type: "EVENTS",
    events
  };
};

export const speechers = speechers => {
  return {
    type: "SPEECHERS",
    speechers
  };
};

export const authors = authors => {
  return {
    type: "AUTHORS",
    authors
  };
};

export const personalities = personalities => {
  return {
    type: "PERSONALITIES",
    personalities
  };
};

export const bookDetails = bookDetails => {
  return {
    type: "GET_BOOK_DETAILS",
    bookDetails
  };
};

export const bayanDetails = bayanDetails => {
  return {
    type: "GET_BAYAN_DETAILS",
    bayanDetails
  };
};

export const personalityDetails = personalityDetails => {
  return {
    type: "GET_PERSONALITY_DETAILS",
    personalityDetails
  };
};

export const eventDetails = eventDetails => {
  return {
    type: "GET_EVENT_DETAILS",
    eventDetails
  };
};

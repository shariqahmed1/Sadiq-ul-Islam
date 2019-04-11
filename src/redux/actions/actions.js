// import { FIREBASE_DATABASE } from "../../constants/firebase";

// export const updateUser = id => async dispatch => {
//   FIREBASE_DATABASE.ref("admin")
//     .child("accounts")
//     .child(id)
//     .once("value", snap => {
//       dispatch(getUserDetails(snap.val()));
//     });
// };

export const speechers = speechers => {
  return {
    type: "GET_SPEECHERS",
    speechers
  };
};

export const authors = authors => {
  return {
    type: "GET_AUTHORS",
    authors
  };
};

export const personalities = personalities => {
  return {
    type: "GET_PERSONALITIES",
    personalities
  };
};

export const isLogin = flag => {
  return {
    type: "IS_LOGIN",
    isLogin: flag
  };
};

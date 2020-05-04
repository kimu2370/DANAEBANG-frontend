import {
  SHOW_AGREEMENT,
  SHOW_LOGGEDIN,
  SHOW_SIGNUP,
  CONTACT_CLOSE_MODAL,
  CONTACT_OPEN_MODAL,
  IMG_CLOSE_MODAL,
  IMG_OPEN_MODAL,
  SELECT_PYEONG,
} from "Redux/types";

export const contactCloseModalAction = () => {
  return {
    type: CONTACT_CLOSE_MODAL,
  };
};

export const contactOpenModalAction = () => {
  return {
    type: CONTACT_OPEN_MODAL,
  };
};

export const imgCloseModalAction = () => {
  return {
    type: IMG_CLOSE_MODAL,
  };
};

export const imgOpenModalAction = () => {
  return {
    type: IMG_OPEN_MODAL,
  };
};

export const selectPyeongAction = (householdNum, pyeongInfo) => {
  return {
    type: SELECT_PYEONG,
    payload: {
      householdNum: householdNum,
      pyeongInfo: pyeongInfo,
    },
  };
};

export const showAgreementAction = () => {
  return {
    type: SHOW_AGREEMENT,
    payload: {
      showAgree: true,
    },
  };
};

export const showSignUpAction = () => {
  return {
    type: SHOW_SIGNUP,
    payload: {
      showSignUp: true,
    },
  };
};

export const showLoggedInAction = () => {
  return {
    type: SHOW_LOGGEDIN,
    payload: {
      showLoggedIn: true,
    },
  };
};

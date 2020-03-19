import { SHOW_AGREEMENT, SHOW_LOGGEDIN, SHOW_SIGNUP } from "Redux/types";

export const showAgreementAction = () => {
  return {
    type: SHOW_AGREEMENT,
    payload: {
      showAgree: true
    }
  };
};

export const showSignUpAction = () => {
  return {
    type: SHOW_SIGNUP,
    payload: {
      showSignUp: true
    }
  };
};

export const showLoggedInAction = () => {
  return {
    type: SHOW_LOGGEDIN,
    payload: {
      showLoggedIn: true
    }
  };
};

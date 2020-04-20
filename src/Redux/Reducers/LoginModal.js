import { SHOW_AGREEMENT, SHOW_LOGGEDIN, SHOW_SIGNUP } from "Redux/types";

const initState = { showAgree: false, showSignUp: false, showLoggedIn: false };
export default function LoginModal(state = initState, action) {
  // console.log("바뀌냐", state);
  switch (action.type) {
    case SHOW_AGREEMENT:
      return { ...state, showAgree: true };
    case SHOW_LOGGEDIN:
      return { ...state, showSignUp: true };
    case SHOW_SIGNUP:
      return { ...state, showLoggedIn: true };
    default:
      return state;
  }
}

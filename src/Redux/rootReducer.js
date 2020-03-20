import { combineReducers } from "redux";
import LoginModal from "Redux/Reducers/LoginModal";
import contactShowModal from "Redux/Reducers/contactShowModal";
import imgShowModal from "Redux/Reducers/imgShowModal";
import selectPyeong from "Redux/Reducers/selectPyeong";

export const rootReducer = combineReducers({
  contactShowModal,
  imgShowModal,
  selectPyeong
  LoginModal
});

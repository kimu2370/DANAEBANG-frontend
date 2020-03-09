import { combineReducers } from "redux";
import contactShowModal from "Redux/Reducers/contactShowModal";
import imgShowModal from "Redux/Reducers/imgShowModal";
import selectPyeong from "Redux/Reducers/selectPyeong";

export const rootReducer = combineReducers({
  contactShowModal,
  imgShowModal,
  selectPyeong
});

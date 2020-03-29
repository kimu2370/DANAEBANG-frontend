import { IMG_OPEN_MODAL, IMG_CLOSE_MODAL } from "Redux/types";
export default function imgShowModal(state = false, action) {
  switch (action.type) {
    case IMG_OPEN_MODAL:
      return true;
    case IMG_CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}

import { CONTACT_OPEN_MODAL, CONTACT_CLOSE_MODAL } from "Redux/types";
export default function contactShowModal(state = false, action) {
  switch (action.type) {
    case CONTACT_OPEN_MODAL:
      return { ...state, showModal: true };
    case CONTACT_CLOSE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
}

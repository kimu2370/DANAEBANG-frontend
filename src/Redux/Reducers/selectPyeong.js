import { SELECT_PYEONG } from "Redux/types";
const initState = {
  householdNum: 0,
  pyeongInfo: [],
};

export default function selectPyeong(state = initState, action) {
  switch (action.type) {
    case SELECT_PYEONG:
      return {
        ...state,
        householdNum: action.payload.householdNum,
        pyeongInfo: action.payload.pyeongInfo,
      };
    default:
      return state;
  }
}

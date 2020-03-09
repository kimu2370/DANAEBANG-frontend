import { SELECT_PYEONG } from "Redux/types";
export const selectPyeongAction = (householdNum, pyeongInfo) => {
  return {
    type: SELECT_PYEONG,
    payload: {
      householdNum: householdNum,
      pyeongInfo: pyeongInfo
    }
  };
};

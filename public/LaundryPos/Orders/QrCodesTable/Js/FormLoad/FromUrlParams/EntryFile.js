import { StartFunc as StartFuncBranch } from "./Branch.js";
import { StartFunc as StartFuncPopUp } from "./PopUp.js";

let StartFunc = () => {
  StartFuncPopUp();
  StartFuncBranch();
};


export { StartFunc }
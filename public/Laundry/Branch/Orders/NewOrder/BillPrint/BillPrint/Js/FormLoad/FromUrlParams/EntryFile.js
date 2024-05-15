import { StartFunc as StartFuncPopUp } from "./PopUp.js";
import { StartFunc as StartFuncBranch } from "./Branch.js";

let StartFunc = () => {
    StartFuncPopUp();
    StartFuncBranch();
}

export { StartFunc }
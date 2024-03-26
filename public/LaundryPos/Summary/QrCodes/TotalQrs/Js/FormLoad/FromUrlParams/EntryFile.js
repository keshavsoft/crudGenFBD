import { StartFunc as StartFuncPopUp } from "./PopUp.js";
import { StartFunc as StartFuncBranchName } from "./BranchName.js";

let StartFunc = () => {
    StartFuncPopUp();
    StartFuncBranchName();
};

export { StartFunc }
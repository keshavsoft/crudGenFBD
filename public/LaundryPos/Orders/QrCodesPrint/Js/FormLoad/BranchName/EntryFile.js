import { StartFunc as StartFuncPopUp } from "./PopUp.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

const StartFunc = () => {
    StartFuncPopUp();
    StartFuncShowOnDom();
};

export { StartFunc };
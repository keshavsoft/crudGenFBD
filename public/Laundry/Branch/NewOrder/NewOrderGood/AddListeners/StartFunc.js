import { StartFunc as StartFuncItemButtonClick } from "./AddItemToServer/1-ClickAssign.js";
import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";

let StartFunc = () => {
    StartFuncItemButtonClick();
    StartFuncOnChange();
};

export { StartFunc };
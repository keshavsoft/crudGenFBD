import { StartFunc as StartFuncItemButtonClick } from "./AddItemToServer/1-ClickAssign.js";
import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";
import { StartFunc as StartFuncMainScreen } from "./MainScreen/MenuIdCollapse.js";

let StartFunc = () => {
    StartFuncItemButtonClick();
    StartFuncOnChange();
    StartFuncMainScreen();
};

export { StartFunc };
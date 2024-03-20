import { StartFunc as StartFuncAddOn } from "./AddOn/ButtonClick.js";
import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";
import { StartFunc as StartFuncMainScreen } from "./MainScreen/MenuIdCollapse.js";
import { StartFunc as StartFuncOnChangeOnAddOns } from "./OnChangeOnAddOns/StartFunc.js";

let StartFunc = () => {
    StartFuncAddOn();
    StartFuncOnChange();
    StartFuncMainScreen();
    StartFuncOnChangeOnAddOns();
};

export { StartFunc };
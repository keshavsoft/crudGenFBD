import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./Js/FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncFormLoad } from "./Js/FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./Js/AddListeners/StartFunc.js";

const StartFunc = () => {
    StartFuncFormLoadBeforeAdmin();
    StartFuncFormLoad();
    StartFuncAddListeners();
};

StartFunc();
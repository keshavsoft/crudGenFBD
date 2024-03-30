// import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./Js/FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    // StartFuncFormLoadBeforeAdmin();
    StartFuncFormLoad();
    StartFuncAddListeners();
};

StartFunc();
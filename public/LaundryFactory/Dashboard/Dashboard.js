import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./Js/FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncFormLoad } from "./Js/FormLoad/StartFunc.js";

const StartFunc = () => {
    StartFuncFormLoadBeforeAdmin();
    StartFuncFormLoad();
};

StartFunc();
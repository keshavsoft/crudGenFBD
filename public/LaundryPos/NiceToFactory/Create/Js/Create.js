import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncformLoad } from "./formLoad/pullTableData/StartFunc.js";
import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";

const StartFunc = () => {
    StartFuncFormLoadBeforeAdmin();
    StartFuncformLoad();

    StartFuncButtonClickFunc();
};

StartFunc();
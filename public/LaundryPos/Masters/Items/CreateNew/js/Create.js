import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";

const StartFunc = () => {
    StartFuncFormLoadBeforeAdmin();

    StartFuncButtonClickFunc();
};

StartFunc();
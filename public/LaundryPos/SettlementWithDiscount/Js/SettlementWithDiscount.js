import { StartFunc as StartFuncNavigation } from "./Navigation/EntryFile.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
    StartFuncNavigation();
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
    };
};

StartFunc();
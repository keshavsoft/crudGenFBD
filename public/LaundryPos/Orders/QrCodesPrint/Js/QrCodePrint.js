import { StartFunc as StartFuncNavigation } from "./Navigation/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    StartFuncNavigation();
    let jVarLocalFromAdmin = true;


    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom().then(() => {
            StartFuncAddListeners();
        });
    };
};

StartFunc();
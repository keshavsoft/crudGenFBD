import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

const StartFunc = () => {
    StartFuncToLocalStorage();
    StartFuncAddListeners();
    // StartFuncAddListeners();
    // jFLocalModalShown();
};

export { StartFunc };

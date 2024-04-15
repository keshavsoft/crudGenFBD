import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/EntryFile.js";

const StartFunc = async () => {
    await StartFuncToLocalStorage();
    StartFuncAddListeners();
    // jFLocalModalShown();
};

export { StartFunc };

import {StartFunc as StartFuncBuildBSTables} from "./BuildBSTables/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";


const StartFunc = () => {
    StartFuncBuildBSTables();
    StartFuncAddlisteners();
};

export { StartFunc };

import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncListenerFuncs();
};

export { StartFunc };

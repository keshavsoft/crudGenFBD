import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs({ inCurrentTarget: jVarLocalCurrentTarget }).then();
    };
};

export { StartFunc };

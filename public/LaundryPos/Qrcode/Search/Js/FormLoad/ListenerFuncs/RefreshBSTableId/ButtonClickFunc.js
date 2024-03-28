import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";
import { StartFunc as StartFuncOrderFetchFromFuncs } from "./OrderFetchFromFuncs/Entry.js";

let StartFunc = () => {
    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs().then();
        StartFuncOrderFetchFromFuncs();
    };
};

export { StartFunc };

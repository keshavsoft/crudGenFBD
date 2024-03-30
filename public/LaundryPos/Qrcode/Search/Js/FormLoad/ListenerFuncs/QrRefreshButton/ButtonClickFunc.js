import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncOrderFetchFromFuncs } from "./OrderFetchFromFuncs/Entry.js";

let StartFunc = () => {
    if (StartFuncCheckFunc()) {
        StartFuncOrderFetchFromFuncs().then()
    };
};

export { StartFunc };

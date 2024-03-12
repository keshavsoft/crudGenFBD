import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    console.log("jVarLocalDataNeeded:,",jVarLocalDataNeeded);
    
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
        }
    }
};

export { StartFunc }
import { StartFunc as StartFuncFetchFuncs } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({inCurrentTarget}) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({inCurrentTarget});
    
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
        };
    };
};

export { StartFunc }
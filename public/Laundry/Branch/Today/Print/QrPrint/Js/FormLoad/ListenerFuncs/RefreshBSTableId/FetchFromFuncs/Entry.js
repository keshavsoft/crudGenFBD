import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncQrCodesData } from "./AfterFetch/QrCodes/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    let jVarLocalQrCodeData = await StartFuncQrCodesData();

    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded, inQrCodeData: jVarLocalQrCodeData });
        };
    };
};

export { StartFunc }
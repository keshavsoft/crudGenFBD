import { StartFunc as StartFuncPromiseAllFetch1 } from "./PromiseAllFetch1/PostFetch.js";
import { StartFunc as StartFuncPromiswAllFetch2 } from "./PromiswAllFetch2/PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let [b, a] = await Promise.all([StartFuncPromiseAllFetch1(), StartFuncPromiswAllFetch2()]);

    if (a && b) {
        let jVarLocalQrCode = a;
        let jVarLocalScanedQrCode = b;
        StartFuncAfterFetch({ inQrCodeData: jVarLocalQrCode, ScanedQrCodeData: jVarLocalScanedQrCode });
    };

};

export { StartFunc }
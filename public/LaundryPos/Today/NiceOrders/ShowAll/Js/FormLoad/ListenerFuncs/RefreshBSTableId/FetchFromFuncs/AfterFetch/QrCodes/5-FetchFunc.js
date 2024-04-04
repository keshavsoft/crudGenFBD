import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalBodyObject = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `/bin/QrCodes/Generate/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl, LocalBodyObject);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
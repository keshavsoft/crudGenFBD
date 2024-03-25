import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalFetchBody = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/bin/QrCodes/Generate/summary`;
    let response = await fetch(jVarLocalFetchUrl, LocalFetchBody);
    let data = await response.json();

    return await data;
};

export { StartFunc };
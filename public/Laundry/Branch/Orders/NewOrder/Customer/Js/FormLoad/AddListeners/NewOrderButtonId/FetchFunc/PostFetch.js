import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    console.log("jVarLocalFetchHeaders: ", jVarLocalFetchHeaders);
    let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/NewOrder/AddItem/Kakinada`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };


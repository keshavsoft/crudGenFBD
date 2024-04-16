import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    // console.log("jVarLocalFetchHeaders: ", jVarLocalFetchHeaders);

    // let jVarLocalFetchUrl = `/bin/Transactions/Kakinada`;
    let jVarLocalFetchUrl = "/Custom/Clients/Washtex/Orders/NewOrder/InsertNewOrder/Kakinada";

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };


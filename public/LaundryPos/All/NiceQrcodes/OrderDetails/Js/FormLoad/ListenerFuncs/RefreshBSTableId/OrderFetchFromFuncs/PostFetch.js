import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalBodyObject = StartFuncFetchHeaders();
    let jVarLocalBranchName = localStorage.getItem("BranchName");


    let jVarLocalFetchUrl = `/bin/Transactions/${jVarLocalBranchName}/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl, LocalBodyObject);
    let data = await response.json();

    return await data;
};

export { StartFunc };
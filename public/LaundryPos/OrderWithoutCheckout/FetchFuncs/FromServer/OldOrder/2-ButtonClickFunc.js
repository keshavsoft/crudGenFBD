import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async ({ inPk }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    if (StartFuncCheckBeforeFetch()) {
        let jVarLocalOrderNumber = StartFuncPreparePostData();

        let response = await StartFuncFetchFunc({ inOrderNumber: jVarLocalOrderNumber });

        await StartFuncAfterFetch({
            inFromFetch: response, inPk,
            inBranchName: jVarLocalBranchName
        });
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
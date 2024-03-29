import { StartFunc as StartFuncForResponse500 } from "./ForResponse500.js";
import { StartFunc as StartFuncForResponse200 } from "./ForResponse200.js";

let StartFunc = async ({ inFetchResonse }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    if (inFetchResonse.status === 500) {
        return await StartFuncForResponse500({ inFetchResonse });
    };
    if (inFetchResonse.status === 200) {
        return await StartFuncForResponse200({ inFetchResonse });
    };

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };
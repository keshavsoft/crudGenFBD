import { StartFunc as StartFuncForResponse500 } from "./ForResponse500.js";
import { StartFunc as StartFuncForResponse200 } from "./ForResponse200.js";

let StartFunc = async ({ inFetchResonse }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    if (inFetchResonse.KTF === false) {
        return StartFuncForResponse500({ inFetchResonse });
    };
    StartFuncForResponse200({ inFetchResonse: inFetchResonse.JsonData });

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };
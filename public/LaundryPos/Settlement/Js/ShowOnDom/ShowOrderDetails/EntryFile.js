import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/OrdersData/FromPkToLocalStorage.js";
import { StartFunc as StartFuncOrderAmount } from "./OrderAmount.js";
import { StartFunc as StartFuncCommonDetails } from "./CommonDetails.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalData = StartFuncFromLocalStorage({
        inPk,
        inBranchName: jVarLocalBranchName
    });

    StartFuncOrderAmount();
    StartFuncCommonDetails({ inData: jVarLocalData, inPk });
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
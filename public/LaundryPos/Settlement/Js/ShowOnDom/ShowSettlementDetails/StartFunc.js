import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/OrdersData/FromPk.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalData = StartFuncFromLocalStorage({
        inPk,
        inBranchName: jVarLocalBranchName
    });

    if (jVarLocalData === false) {
        return "";
    };

    if ("JsonData" in jVarLocalData === false) {
        return "";
    };

    if ("CheckOutData" in jVarLocalData === false) {
        return "";
    };

    jFLocalToInputCashAmountId({ inCashAmountId: jVarLocalData.CheckOutData.CashAmount });
    jFLocalToInputUPIAmountId({ inCashAmountId: jVarLocalData.CheckOutData.UPIAmount });
    jFLocalToInputCardAmountId({ inCashAmountId: jVarLocalData.CheckOutData.CardAmount });
};

let jFLocalToInputCashAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'CashAmountId';
    let jVarLocalCashAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCashAmountId.value = inCashAmountId;
};

let jFLocalToInputUPIAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'UPIAmountId';
    let jVarLocalUPIAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalUPIAmountId.value = inCashAmountId;
};

let jFLocalToInputCardAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'CardAmountId';
    let jVarLocalCardAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCardAmountId.value = inCashAmountId;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };
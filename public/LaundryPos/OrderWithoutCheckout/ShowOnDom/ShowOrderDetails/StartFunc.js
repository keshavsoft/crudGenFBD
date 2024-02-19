import { StartFunc as StartFuncFromLocalStorage } from "../../../FromLocalStorage/OrdersData/FromPk.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalData = StartFuncFromLocalStorage({
        inPk,
        inBranchName: jVarLocalBranchName
    });

    jFLocalCustomerName({ inOrderInfoCustomerNameId: jVarLocalData.CustomerData.CustomerName });
    jFLocalOrderInfoCustomerMobileId({ inOrderInfoCustomerMobileId: jVarLocalData.CustomerData.CustomerMobile });
    jFLocalBranchNameId({ inBranchNameId: jVarLocalData.OrderData.BranchName });
    jFLocalToInputCurrentdateandtime({ inCurrentdateandtime: jVarLocalData.OrderData.Currentdateandtime });
    jFLocalOrderAmount({ inData: jVarLocalData });
};

let jFLocalToInputCurrentdateandtime = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === undefined === false) {
        let jVarLocalHtmlId = 'Currentdateandtime';
        let jVarLocalCurrentdateandtime = document.getElementById(jVarLocalHtmlId);
        jVarLocalCurrentdateandtime.value = inCurrentdateandtime;
    }
};

let jFLocalBranchNameId = ({ inBranchNameId }) => {
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.value = inBranchNameId;
};

let jFLocalOrderAmount = ({ inData }) => {
    let jVarLocalItemsArray = Object.values(inData.ItemsInOrder).map(element => {
        return element.Total;
    });

    const sum = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    let jVarLocalAddOn = Object.values(inData.AddOnData).map(element => {
        return element.AddOnRate;
    });

    const sumOfAddOn = jVarLocalAddOn.reduce((partialSum, a) => partialSum + a, 0);
};

let jFLocalCustomerName = ({ inOrderInfoCustomerNameId }) => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";
    let jVarLocalOrderInfoCustomerNameId = document.getElementById(jVarLocalHtmlId);

    jVarLocalOrderInfoCustomerNameId.value = inOrderInfoCustomerNameId;
};

let jFLocalOrderInfoCustomerMobileId = ({ inOrderInfoCustomerMobileId }) => {
    let jVarLocalHtmlId = 'OrderInfoCustomerMobileId';
    let jVarLocalOrderInfoCustomerMobileId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderInfoCustomerMobileId.value = inOrderInfoCustomerMobileId;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };
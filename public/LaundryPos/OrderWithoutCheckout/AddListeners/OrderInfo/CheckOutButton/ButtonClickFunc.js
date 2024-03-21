import { StartFunc as StartFuncPrepareData } from "./../PrepareData/StartFunc.js";
import { StartFunc as StartFuncToUrlWithDiscount } from "./ToUrlWithDiscount.js";
import { StartFunc as StartFuncToUrlWithoutDiscount } from "./ToUrlWithoutDiscount.js";
import { StartFunc as StartFuncItemsInOrder } from "../../../../FromLocalStorage/ItemsInOrder/Bulk.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../ToLocalStorage/OrdersData/ItemsInOrder.js";

const StartFunc = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalOrderNumberFromDom = jFLocalFromDomOrderNumberId();

    let jVarLocalToLocalStorage = StartFuncPrepareData();

    let jVarLocalOrderNumber = StartFuncToLocalStorage({
        inEntry: jVarLocalToLocalStorage,
        inPk: jVarLocalOrderNumberFromDom,
        inBranchName: jVarLocalBranchName
    });
    if (jVarLocalOrderNumber > 0) {
        let jVarLocalIsDiscountGiven = jFlocalIsDiscountGiven();

        if (jVarLocalIsDiscountGiven === true) {
            StartFuncToUrlWithoutDiscount({
                inBranchName: jVarLocalBranchName,
                inOrderNumber: jVarLocalOrderNumber
            });
        }
        else {
            StartFuncToUrlWithDiscount({
                inBranchName: jVarLocalBranchName,
                inOrderNumber: jVarLocalOrderNumber
            });
        }
    };
};
let jFlocalIsDiscountGiven = () => {

    let jVarLocalItemData = StartFuncItemsInOrder();
    let jVarLocalFiltered = Object.values(jVarLocalItemData).filter(element => {
        return element.DisPer > 0;
    });

    if (jVarLocalFiltered.length > 0) return true;
    return false;

};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML;
    return jVarHtmlOrderNumberIdValue;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc }
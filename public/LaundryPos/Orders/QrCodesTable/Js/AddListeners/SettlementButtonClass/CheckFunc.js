import { StartFunc as StartFuncItemsInOrder } from "../../../../../FromLocalStorage/ItemsInOrder/Bulk.js";

import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/OrdersData/FromPkToLocalStorage.js";
import { StartFunc as StartFuncToUrlWithDiscount } from "./ToUrlWithDiscount.js";
import { StartFunc as StartFuncToUrlWithoutDiscount } from "./ToUrlWithoutDiscount.js";


let StartFunc = ({ inBranchName, inOrderNumber }) => {
    let jVarLocalBranchName = inBranchName;

    let jVarLocalOrderNumber = inOrderNumber;

    StartFuncFromLocalStorage({
        inPk: jVarLocalOrderNumber,
        inBranchName: jVarLocalBranchName
    });

    let jVarLocalIsDiscountGiven = jFlocalIsDiscountGiven();

    if (jVarLocalIsDiscountGiven === true) {
        StartFuncToUrlWithoutDiscount({
            inOrderNumber: jVarLocalOrderNumber,
            inBranchName: inBranchName
        });
    }
    else {
        StartFuncToUrlWithDiscount({
            inBranchName: jVarLocalBranchName,
            inOrderNumber: jVarLocalOrderNumber
        });
    };

    return true;
};

let jFlocalIsDiscountGiven = () => {
    let jVarLocalItemData = StartFuncItemsInOrder();
    let jVarLocalFiltered = Object.values(jVarLocalItemData).filter(element => {
        return element.DisPer > 0;
    });

    if (jVarLocalFiltered.length > 0) return true;
    return false;

};

export { StartFunc };
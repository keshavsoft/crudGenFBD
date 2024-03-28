import { StartFunc as StartFuncToUrlWithoutDiscount } from "./ToUrlWithoutDiscount.js";
import { StartFunc as StartFuncToUrlWithDiscount } from "./ToUrlWithDiscount.js";

const StartFunc = ({ inFromFetch }) => {
    let jVarLocalBranchName = inFromFetch.OrderData.BranchName;
    let jVarLocalOrderNumber = inFromFetch.pk;

    let jVarLocalIsDiscountGiven = jFlocalIsDiscountGiven({ inCheckOutData: inFromFetch.ItemsInOrder });

    if (jVarLocalIsDiscountGiven === true) {
        StartFuncToUrlWithoutDiscount({
            inOrderNumber: jVarLocalOrderNumber,
            inBranchName: jVarLocalBranchName
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

let jFlocalIsDiscountGiven = ({ inCheckOutData }) => {
    let jVarLocalItemData = inCheckOutData
    let jVarLocalFiltered = Object.values(jVarLocalItemData).filter(element => {
        return element.DisPer > 0;
    });

    if (jVarLocalFiltered.length > 0) return true;
    return false;

};


export { StartFunc };
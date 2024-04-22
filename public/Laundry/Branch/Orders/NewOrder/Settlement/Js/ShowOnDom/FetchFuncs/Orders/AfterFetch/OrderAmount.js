import { StartFunc as StartFuncFromLocalStorageOrderItemsToShow } from "../../../../../../FromLocalStorage/OrderItemsToShow/Bulk.js";

let StartFunc = ({ inData }) => {
    let jVarLocalDataNeeded = StartFuncFromLocalStorageOrderItemsToShow();
    console.log("jVarLocalDataNeeded::",jVarLocalDataNeeded.BodyData);
    let jVarLocalItemsArray = Object.values(jVarLocalDataNeeded.BodyData).map(element => {
        return element.Total;
    });

    const sum = jVarLocalItemsArray.reduce((partialSum, a) => partialSum + a, 0);

    jFLocalOrderAmountId({ inOrderAmountId: sum });
};

let jFLocalOrderAmountId = ({ inOrderAmountId }) => {
    let jVarLocalHtmlId = 'OrderAmountId';
    let jVarLocalOrderAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderAmountId.innerHTML = inOrderAmountId;
};
export { StartFunc };
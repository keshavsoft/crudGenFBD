import { StartFunc as StartFuncFromFetch } from "../../../FetchFuncs/FromServer/OldOrder/2-ButtonClickFunc.js";
import { StartFunc as StartFuncAddToDom } from "../../AddToDom.js";
import { StartFunc as StartFuncShowOnDom } from "../../../ShowOnDom/StartFunc.js";
import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/OrdersData/FromPk.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../ToLocalStorage/ItemsInOrder/Bulk.js";
import { StartFunc as StartFuncToLocalStorageAddOn } from "../../../../ToLocalStorage/AddOnData/Bulk.js";


let StartFunc = async () => {
    let jVarLocalRowPk = getUrlQueryParams({ inGetKey: "OrderNumber" });

    await StartFuncFromFetch({ inPk: jVarLocalRowPk });

    jFLocalFromOrdersDataToItemsInOrder();
    jFLocalAddAddOnData();

    StartFuncAddToDom();
    StartFuncShowOnDom({ inPk: jVarLocalRowPk });

};

let jFLocalFromOrdersDataToItemsInOrder = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({
        inPk: jFLocalOrderNumber,
        // inBranchName: ApiConfigJson.BranchName
        inBranchName: jVarLocalBranchName
    });

    if (jVarLocalFromLocalStorage === false) {
        return false;
    };

    StartFuncToLocalStorage({ inData: jVarLocalFromLocalStorage.ItemsInOrder });
};

let jFLocalAddAddOnData = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({
        inPk: jFLocalOrderNumber,
        // inBranchName: ApiConfigJson.BranchName
        inBranchName: jVarLocalBranchName
    });
    if (jVarLocalFromLocalStorage === false) {
        return false;
    };

    StartFuncToLocalStorageAddOn({ inData: jVarLocalFromLocalStorage.AddOnData });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
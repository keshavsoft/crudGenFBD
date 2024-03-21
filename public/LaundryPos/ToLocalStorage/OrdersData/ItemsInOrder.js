import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inPk }) => {

    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);
    StartFuncBulk({ inData: jVarLocalJsonData });

    return parseInt(inPk);
};

export { StartFunc };
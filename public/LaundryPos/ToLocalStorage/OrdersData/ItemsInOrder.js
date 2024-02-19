import CommonKeys from "../Keys.json" assert { type: "json" };
// import CommonConfigJson from "../../Config.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inEntry, inPk, inBranchName }) => {
    // let jVarLocalBranchName = CommonConfigJson.BranchName;
    let jVarLocalBranchName = inBranchName;

    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);
    // console.log("jVarLocalJsonData:",jVarLocalJsonData);

    // if (jVarLocalBranchName in jVarLocalJsonData.OrderData === false) {
    //     jVarLocalJsonData[jVarLocalBranchName] = {};
    // };

    // let jVarLocalParsed = jVarLocalJsonData;

    // if (inPk in jVarLocalParsed) {
    //     jVarLocalParsed[inPk] = {
    //         ...jVarLocalParsed[inPk],
    //         ...inEntry
    //     };

        StartFuncBulk({ inData: jVarLocalJsonData });

        return parseInt(inPk);
    // };

    return false;
};

export { StartFunc };
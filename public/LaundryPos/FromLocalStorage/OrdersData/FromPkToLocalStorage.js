import { StartFunc as StartFuncBulk } from "./Bulk.js"
import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/ItemsInOrder/InsertWithCalculations.js";
import { StartFunc as StartFuncToLocalStorageAddOnData } from "../../ToLocalStorage/AddOnData/Bulk.js";

const StartFunc = ({ inPk, inBranchName }) => {
    let jVarLocalDataNeeded = StartFuncBulk({ inBranchName });
console.log("jVarLocalDataNeeded.UuId::",jVarLocalDataNeeded.UuId);
    if (inPk == jVarLocalDataNeeded.UuId) {
        StartFuncToLocalStorageAddOnData({ inData: jVarLocalDataNeeded.AddOnData });
        StartFuncToLocalStorage({ inData: jVarLocalDataNeeded.ItemsInOrder });

        return jVarLocalDataNeeded;
    };
};

export { StartFunc }; 
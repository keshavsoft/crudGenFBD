// import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inEntry, inPk, inBranchName }) => {
    let jVarLocalBranchName = inBranchName;

    if (jVarLocalBranchName === undefined) {
        console.log("jVarLocalBranchName undefined in toLocalStorage ");
        return 0;
    };

    StartFuncBulk({ inData: inEntry });

    return inPk;
};



export { StartFunc };
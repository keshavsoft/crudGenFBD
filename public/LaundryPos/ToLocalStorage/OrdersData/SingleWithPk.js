// import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inEntry, inPk, inBranchName }) => {
    StartFuncBulk({ inData: inEntry });

    return inPk;
};

export { StartFunc };
import { StartFunc as StartFuncBulk } from "./Bulk.js"
import { StartFunc as StartFuncFetch } from "./Fetch.js";

const StartFunc = ({ inPk, inBranchName }) => {
    let jVarLocalDataNeeded = StartFuncBulk({ inBranchName });
    // let LocalOrdersData = StartFuncFetch({ inPk ,inBranchName});

    // let jVarLocalReturnData = {};
    // jVarLocalReturnData.KTF = false;

    // if (inPk in jVarLocalDataNeeded) {
    //     jVarLocalReturnData.JsonData = jVarLocalDataNeeded[inPk];
    //     jVarLocalReturnData.KTF = true;
    // };

    return jVarLocalDataNeeded;
};

export { StartFunc };
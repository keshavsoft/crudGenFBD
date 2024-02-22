import { StartFunc as StartFuncBulk } from "./Bulk.js"
import { StartFunc as StartFuncFetch } from "./Fetch.js";

const StartFunc = ({ inPk, inBranchName }) => {
    let jVarLocalDataNeeded = StartFuncBulk({ inBranchName });
    let LocalOrdersData = StartFuncFetch({ inPk ,inBranchName});
    console.log("LocalOrdersData:",LocalOrdersData,inBranchName,inPk);
    console.log("jVarLocalDataNeeded:", jVarLocalDataNeeded);

    // let jVarLocalReturnData = {};
    // jVarLocalReturnData.KTF = false;

    // if (inPk in jVarLocalDataNeeded) {
    //     jVarLocalReturnData.JsonData = jVarLocalDataNeeded[inPk];
    //     jVarLocalReturnData.KTF = true;
    // };

    return jVarLocalDataNeeded;
};

export { StartFunc };
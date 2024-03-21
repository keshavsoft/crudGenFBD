import { StartFunc as StartFuncBulk } from "./Bulk.js"

const StartFunc = ({ inBranchName }) => {
    let jVarLocalDataNeeded = StartFuncBulk({ inBranchName });
    return jVarLocalDataNeeded;
};

export { StartFunc };
import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";

let StartFunc = () => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataSet = jVarLocalCurrentTarget.dataset;

    if ('ordernumber' in jVarLocalDataSet) {
        let jVarLocalordernumber = jVarLocalDataSet.ordernumber;
        let jVarLocalBranchName = jVarLocalDataSet.branchname;
        
        StartFuncCheckFunc({ inOrderNumber: jVarLocalordernumber,inBranchName:jVarLocalBranchName });
    };
};

export { StartFunc };
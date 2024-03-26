import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementsByClassName("BranchNavClass");

    for (let i = 0; i < jVarLocalRefreshBSTableId.length; i++) {
        jVarLocalRefreshBSTableId[i].addEventListener("click", (e) => {
            let LocalBranchName = e.currentTarget.dataset.branchname;
            StartFuncButtonClickFunc({ inBranchName: LocalBranchName });
        });

    };
};

export { StartFunc };
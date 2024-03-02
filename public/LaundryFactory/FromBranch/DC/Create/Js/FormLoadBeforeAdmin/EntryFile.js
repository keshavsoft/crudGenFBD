import { StartFunc as StartFuncNavMenu } from "./NavMenu/Entry.js";
import { StartFunc as StartFuncBreadCumMenu } from "./BreadCumMenu/Entry.js";

const StartFunc = () => {
    StartFuncNavMenu();
    StartFuncBreadCumMenu();
    jFLocalParams();
};

const jFLocalParams = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ title: "No Branch Name in params", icon: "error" })

    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalBranchName;
    };

}

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
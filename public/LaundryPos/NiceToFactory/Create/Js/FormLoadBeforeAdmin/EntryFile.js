const StartFunc = () => {
    jFLocalParams();
};

const jFLocalParams = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ title: "No Branch Name in params", icon: "error" })

    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalBranchName;
    };

};

export { StartFunc };
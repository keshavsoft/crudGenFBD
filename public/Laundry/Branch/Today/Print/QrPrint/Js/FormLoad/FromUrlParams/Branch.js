let StartFunc = () => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalBranchId = document.getElementById("BranchNameId");

    jVarLocalBranchId.innerHTML = jVarLocalBranchId.innerHTML.replace("{{Branch}}", jVarLocalBranchName)
};

export { StartFunc }
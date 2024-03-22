let StartFunc = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalBranchId = document.getElementById("BranchNameId");
    jVarLocalBranchId.innerHTML = jVarLocalBranchId.innerHTML.replace("{{Branch}}", jVarLocalBranchName)
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
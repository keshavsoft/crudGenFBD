let StartFunc = () => {
    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarlocalBranch.innerHTML.replace("{{Branch}}", jVarLocalBranchName);
    };

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);

    if (jVarlocalBranch === null === false) {
        var text = jVarlocalBranch.innerHTML;

        jVarlocalBranch.innerHTML = text.replace("{{Branch}}", jVarLocalBranchName);
    };

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
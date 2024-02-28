let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBaranchNameId = document.getElementById('BranchNameId');

    if (jVarLocalBaranchNameId === null === false) {
        var text = jVarLocalBaranchNameId.innerHTML;
        jVarLocalBaranchNameId.innerHTML = text.replace("{{BranchName}}", jVarLocalBranchName);

    };
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
const StartFunc = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" })
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let getUrlQueryParams = ({ inGetKey }) => {
        const queryString = window.location.search;
        const parameters = new URLSearchParams(queryString);
        const value = parameters.get(inGetKey);
        return value;
    };
    jFLocalBranchNameId({ inBranchNameId: jVarLocalBranchName });
};

let jFLocalBranchNameId = ({ inBranchNameId }) => {
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.value = inBranchNameId;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
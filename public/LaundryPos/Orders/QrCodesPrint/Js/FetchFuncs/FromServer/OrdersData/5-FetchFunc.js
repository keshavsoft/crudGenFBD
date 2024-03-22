
let StartFunc = async () => {
// let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = `/bin/Transactions/${jVarLocalBranchName}/DataOnly`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
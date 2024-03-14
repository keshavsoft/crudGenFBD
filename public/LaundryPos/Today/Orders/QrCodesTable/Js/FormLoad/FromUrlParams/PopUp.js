let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ icon: "error", text: "No Branch on Params" });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
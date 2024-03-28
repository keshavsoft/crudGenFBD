let StartFunc = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalReferncePk = getUrlQueryParams({ inGetKey: "ReferncePk" });

    if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ icon: "error", text: "No Branch on Params" });
    if (jVarLocalReferncePk === "" || jVarLocalReferncePk === null) swal.fire({ icon: "error", text: "No ReferncePk on Params" });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
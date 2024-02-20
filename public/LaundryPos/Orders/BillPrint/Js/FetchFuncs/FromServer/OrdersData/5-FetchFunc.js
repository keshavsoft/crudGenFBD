let StartFunc = async ({ inBodyData }) => {
    let jVarLocalinRowPk = inBodyData.inRowPk;
    let jVarLocalBranchName = inBodyData.BranchName;

    let jVarLocalFetchUrl = `/bin/Transactions/${jVarLocalBranchName}/${jVarLocalinRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    console.log("jVarLocalResponse---",jVarLocalResponse);

    return jVarLocalResponse;
};

export { StartFunc };
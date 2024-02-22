
let StartFunc = async ({ inBodyData }) => {
    let jVarLocalMainRowPK = inBodyData.MainRowPK;
    let jVarLocalRowPK = inBodyData.RowPK;
    let jVarLocalBranchName = inBodyData.BranchName;
    let jVarLocalinKey = inBodyData.inKey;

    let jVarLocalFetchUrl = `/bin/Transactions/${jVarLocalBranchName}/FromKey/${jVarLocalMainRowPK}/${jVarLocalinKey}/${jVarLocalRowPK}`;

    let jVarLocalFetchHeaderObject = {
        method: "DELETE"
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
let StartFunc = async ({ inPreparePostData }) => {
    let jVarLocalBodyData = inPreparePostData.BodyData;
    let LocalBranchName = inPreparePostData.BranchName;
    let LocalMainRowPK = inPreparePostData.MainRowPK;

    let jVarLocalFetchUrl = `/bin/Transactions/${LocalBranchName}/UsingLoadash/${LocalMainRowPK}`;

    let jVarLocalFetchHeaderObject = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
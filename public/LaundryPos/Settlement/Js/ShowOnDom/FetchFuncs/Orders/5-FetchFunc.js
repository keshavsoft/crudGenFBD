let StartFunc = async ({ inPk }) => {
    let jVarLocalinPk = inPk;

    let jVarLocalFetchUrl = `/bin/Transactions/Kakinada/${jVarLocalinPk}`;
    
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
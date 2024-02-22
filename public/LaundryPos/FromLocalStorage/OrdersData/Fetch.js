
const StartFunc = async ({ inPk, inBranchName }) => {
    let jVarLocalFetchUrl = `/bin/Transactions/${inBranchName}/${inPk}`;


    let localFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await localFetch.json();

    return jVarLocalResponse;

};


export { StartFunc };
let StartFunc = async ({ inRowPk }) => {
    let jVarLocalinRowPk = inRowPk;
    let jVarLocalFetchUrl = `/bin/QrCodes/Generate/DataOnly`;
    
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return await jVarLocalResponse;
};

export { StartFunc };

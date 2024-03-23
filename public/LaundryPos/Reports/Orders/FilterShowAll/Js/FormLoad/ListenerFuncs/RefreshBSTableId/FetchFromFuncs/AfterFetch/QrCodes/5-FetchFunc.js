let StartFunc = async ({ inBodyData }) => {
    let jVarLocalFetchUrl = `/bin/QrCodes/Generate/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
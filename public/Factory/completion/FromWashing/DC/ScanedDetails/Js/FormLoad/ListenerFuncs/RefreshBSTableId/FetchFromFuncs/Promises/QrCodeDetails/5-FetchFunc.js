let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Washing/QrCodeDetails`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
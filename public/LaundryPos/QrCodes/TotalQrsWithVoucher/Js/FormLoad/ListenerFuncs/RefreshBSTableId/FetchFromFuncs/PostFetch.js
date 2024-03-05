let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/QrCodes/Generate`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};


export { StartFunc };
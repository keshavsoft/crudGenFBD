let StartFunc = async () => {
    let jVarLocalFetchUrl = `/Common/bin/FilesWithData/ActualData/Transactions`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Masters/CustomerNames/DataOnly`
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };
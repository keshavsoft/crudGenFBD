let StartFunc = async () => {

    let jVarLocalFetchUrl = `/bin/Masters/CustomerNames/DataOnly`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
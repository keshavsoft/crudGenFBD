let StartFunc = async () => {

    let jVarLocalFetchUrl = `/bin/Masters/Items/DataOnly`;
    
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
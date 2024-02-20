
const StartFunc = async ({inPk}) => {
    let jVarLocalFetchUrl = `/bin/Transactions/Kakinada/${inPk}`;


    let localFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await localFetch.json();


    return jVarLocalResponse;

};


export { StartFunc };
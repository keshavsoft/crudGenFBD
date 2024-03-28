import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalReferncePk = getUrlQueryParams({ inGetKey: "ReferncePk" });
    let jVarLocalBodyKeysJson = {};

    jVarLocalBodyKeysJson.FindKey = "e.pk"
    jVarLocalBodyKeysJson.FindValue = jVarLocalReferncePk;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
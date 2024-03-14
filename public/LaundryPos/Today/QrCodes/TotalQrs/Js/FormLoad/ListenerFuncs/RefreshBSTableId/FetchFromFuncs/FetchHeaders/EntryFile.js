import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalTodatDate = new Date().toISOString().split('T')[0]
    let jVarLocalBodyKeysJson = {};

    jVarLocalBodyKeysJson.FindKey = "new Date(e.DateTime).toISOString().split('T')[0]"
    jVarLocalBodyKeysJson.FindValue = LocalTodatDate;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

export { StartFunc }
import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalTodayDate = new Date().toISOString().split('T')[0]
    let jVarLocalBodyKeysJson = {};

    jVarLocalBodyKeysJson.FindKey = "new Date(e.OrderData.Currentdateandtime).toISOString().split('T')[0]"
    jVarLocalBodyKeysJson.FindValue = LocalTodayDate;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

export { StartFunc }
import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalDate = new Date().toISOString().split('T')[0]
    let jVarLocalBodyKeysJson = {};

    jVarLocalBodyKeysJson.FindKey = "new Date(e.OrderData.Currentdateandtime).toISOString().split('T')[0]"
    jVarLocalBodyKeysJson.FindValue = LocalDate;

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

export { StartFunc }
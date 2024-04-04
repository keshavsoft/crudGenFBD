import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalTodayDate = jFLocalGetCurrentDate();

    let jVarLocalBodyKeysJson = {};
    jVarLocalBodyKeysJson.FindKey = "e.DateTime.split('T')[0]";
    jVarLocalBodyKeysJson.FindValue = LocalTodayDate;
    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

let jFLocalGetCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = `${yyyy}-${mm}-${dd}`;
    return formattedToday;
};

export { StartFunc }
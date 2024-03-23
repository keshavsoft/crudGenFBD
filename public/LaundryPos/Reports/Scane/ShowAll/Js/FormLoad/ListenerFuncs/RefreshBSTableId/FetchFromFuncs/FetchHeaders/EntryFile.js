import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    // let LocalTodayDate = new Date().toJSON().split('T')[0];
    // let LocalTodayDate = new Date().toISOString().split('T')[0]

    let LocalTodayDate = jFLocalGetCurrentDate();

    let jVarLocalBodyKeysJson = {};

    // jVarLocalBodyKeysJson.FindKey = "new Date(e.OrderData.Currentdateandtime).toISOString().split('T')[0]";

    jVarLocalBodyKeysJson.FindKey = "e.OrderData.Currentdateandtime.split('T')[0]";

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
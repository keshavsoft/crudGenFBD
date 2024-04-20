import KeysJson from './Keys.json' assert {type: 'json'};
// import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = () => {
    let jVarLocalFromDom = jFLocalCustomerNameInputId();
    let jVarLocalMobileNumber = jVarLocalFromDom.split(":")[1];
    let jVarLocalCustomerName = jVarLocalFromDom.split(":")[0];

    KeysJson.body.CustomerData.CustomerMobile = jVarLocalMobileNumber;
    KeysJson.body.CustomerData.CustomerName = jVarLocalCustomerName;

    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'CustomerNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };
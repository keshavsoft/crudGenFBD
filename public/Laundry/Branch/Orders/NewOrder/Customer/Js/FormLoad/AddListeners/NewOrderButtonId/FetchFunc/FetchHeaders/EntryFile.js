import KeysJson from './Keys.json' assert {type: 'json'};
// import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = () => {
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

export { StartFunc };
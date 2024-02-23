import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();
    let jVarLocalFetchUrl = `/bin/QrCodes/Generate/${jVarLocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    return jVarLocalResponse;

};

export { StartFunc };
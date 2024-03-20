import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

const StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let LocalRowPk = jVarLocalBodyData.inRowPk;

    let jVarLocalFetchUrl = `/bin/Masters/AddOns/${LocalRowPk}`;
    let LocalBodyData = {
        method: "DELETE"
    };

    let response = await fetch(jVarLocalFetchUrl, LocalBodyData);
    let jVarLocalResponse = await response.json();
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse, });

    return jVarLocalResponse;

};
export { StartFunc };

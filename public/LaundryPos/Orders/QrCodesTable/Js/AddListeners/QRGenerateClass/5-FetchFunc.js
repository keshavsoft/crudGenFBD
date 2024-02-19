import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

const StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let inRowPk = jVarLocalBodyData.inRowPk;
    let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Qrcodes/${inRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return jVarLocalResponse;

};
export { StartFunc };

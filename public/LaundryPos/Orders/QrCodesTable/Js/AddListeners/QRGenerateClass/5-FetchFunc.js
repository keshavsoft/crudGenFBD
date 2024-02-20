import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

const StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let LocalRowPk = jVarLocalBodyData.inRowPk;
    let LocalBranchName = jVarLocalBodyData.BranchName;
    
    let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Qrcodes/Table/${LocalBranchName}/${LocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return jVarLocalResponse;

};
export { StartFunc };

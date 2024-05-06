import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";

let StartFunc = async ({ inCustomerName, inCustomerMobile }) => {
    let jVarLocalResponse = await StartFuncFetchFunc({
        inCustomerName, inCustomerMobile
    });

    return await jVarLocalResponse;
};

export { StartFunc };
import { StartFunc as StartFuncPresentOrderData } from "./PresentOrderData.js";

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage = {
        ...StartFuncPresentOrderData()
    };

    return jVarLocalToLocalStorage;
};

export { StartFunc }
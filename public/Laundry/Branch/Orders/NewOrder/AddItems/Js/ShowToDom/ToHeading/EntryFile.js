import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = () => {
    let jVarLocalData = StartFuncFromLocalStorage();
    
    jFLocalToInputCustomerMobileId(jVarLocalData.CustomerData.CustomerMobile);
};

let jFLocalToInputCustomerMobileId = (inValue) => {
    let jVarLocalHtmlId = 'CustomerMobileId';
    let jVarLocalCustomerMobileId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerMobileId === null === false) {
        jVarLocalCustomerMobileId.value = inValue;
    };
};

export { StartFunc }
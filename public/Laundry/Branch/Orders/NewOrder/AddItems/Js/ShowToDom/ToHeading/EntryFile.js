import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = () => {
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage();

    jFLocalToInputCustomerMobileId(jVarLocalFromLocalStorage.CustomerData.CustomerMobile);
    jFLocalToInputCustomerNameId(jVarLocalFromLocalStorage.CustomerData.CustomerName);
};

let jFLocalToInputCustomerNameId = (inValue) => {
    let jVarLocalHtmlId = 'CustomerNameId';
    let jVarLocalCustomerNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerNameId === null === false) {
        jVarLocalCustomerNameId.value = inValue;
    };
};

let jFLocalToInputCustomerMobileId = (inValue) => {
    let jVarLocalHtmlId = 'CustomerMobileId';
    let jVarLocalCustomerMobileId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerMobileId === null === false) {
        jVarLocalCustomerMobileId.value = inValue;
    };
};

export { StartFunc };
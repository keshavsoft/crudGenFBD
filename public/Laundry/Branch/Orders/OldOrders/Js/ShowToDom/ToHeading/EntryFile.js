import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = () => {
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage();

    jFLocalToInputCustomerMobileId(jVarLocalFromLocalStorage.CustomerData.CustomerMobile);
    jFLocalToInputCustomerNameId(jVarLocalFromLocalStorage.CustomerData.CustomerName);
    jFLocalToInputOrderNumberId(jVarLocalFromLocalStorage.pk);
};

let jFLocalToInputOrderNumberId = (inValue) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalOrderNumberId === null === false) {
        jVarLocalOrderNumberId.innerHTML = inValue;
    };
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
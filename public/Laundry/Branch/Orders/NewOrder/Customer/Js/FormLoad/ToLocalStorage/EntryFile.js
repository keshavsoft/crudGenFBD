import { StartFunc as StartFuncCustomerNames } from "./CustomerNames/GetFetch.js";

let StartFunc = () => {
    StartFuncCustomerNames().then();
};

export { StartFunc }
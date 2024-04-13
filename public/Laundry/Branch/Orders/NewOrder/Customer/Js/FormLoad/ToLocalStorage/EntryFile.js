import { StartFunc as StartFuncCustomerNames } from "./CustomerNames/GetFetch.js";
import { StartFunc as StartFuncItemNames } from "./ItemNames/GetFetch.js";

let StartFunc = () => {
    StartFuncCustomerNames().then();
    StartFuncItemNames().then();
};

export { StartFunc }
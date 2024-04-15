import { StartFunc as StartFuncCustomerNameInputId } from "./CustomerNameInputId/keypress/EntryFile.js";
import { StartFunc as StartFuncNewOrderButtonId } from "./NewOrderButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncCustomerNameInputId();
    StartFuncNewOrderButtonId();
};

export { StartFunc }
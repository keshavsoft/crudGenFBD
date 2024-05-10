import { StartFunc as StartFuncCustomerNameInputId } from "./CustomerNameInputId/keypress/EntryFile.js";
import { StartFunc as StartFuncNewOrderButtonId } from "./NewOrderButtonId/EntryFile.js";
import { StartFunc as StartFuncCustomerNameSearchButtonId } from "./CustomerNameSearchButtonId/EntryFile.js";
import { StartFunc as StartFuncMasterButtonId } from "./MasterButtonId/EntryFile.js";
let StartFunc = () => {
    StartFuncCustomerNameInputId();
    StartFuncNewOrderButtonId();
    StartFuncCustomerNameSearchButtonId();
    StartFuncMasterButtonId();
};

export { StartFunc }
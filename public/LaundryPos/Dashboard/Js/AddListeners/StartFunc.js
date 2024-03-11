import { StartFunc as StartFuncGoButton } from "./GoButton/StartFunc.js";
import { StartFunc as StartFuncCustomerCreateID } from "./CustomerCreateID/StartFunc.js";

const StartFunc = () => {
    StartFuncGoButton();
    StartFuncCustomerCreateID();
};

export { StartFunc }
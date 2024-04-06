import { StartFunc as StartFuncPrepareItemsInOrder } from "./PrepareItemsInOrder.js";
import { StartFunc as StartFuncCustomerData } from "./CustomerData.js";
import { StartFunc as StartFuncOrderData } from "./OrderData.js";

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    let jVarLocalCustomerData = StartFuncCustomerData();
    let jVarLocalOrderData = StartFuncOrderData();

    jVarLocalToLocalStorage.ItemsInOrder = {};
    jVarLocalToLocalStorage.CustomerData = jVarLocalCustomerData;
    jVarLocalToLocalStorage.OrderData = jVarLocalOrderData;
    jVarLocalToLocalStorage.AddOnData = {};
    jVarLocalToLocalStorage.CheckOutData = {};
    jVarLocalToLocalStorage.ItemsInOrder[1] = StartFuncPrepareItemsInOrder();

    return jVarLocalToLocalStorage;
};
export { StartFunc };
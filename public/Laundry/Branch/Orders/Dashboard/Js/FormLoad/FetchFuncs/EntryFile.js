import { StartFunc as StartFuncCustomers } from "./Customers/2-ButtonClickFunc.js";
import { StartFunc as StartFuncItems } from "./Items/2-ButtonClickFunc.js";
import { StartFunc as StartFunAddOns } from "./AddOns/2-ButtonClickFunc.js";
// import { StartFunc as StartFuncOrdersData } from "./OrdersData/Initialize.js";

let StartFunc = async () => {
    await StartFuncCustomers();
    await StartFuncItems();
    await StartFunAddOns();
    // StartFuncOrdersData();
};

export { StartFunc };
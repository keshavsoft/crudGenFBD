import { StartFunc as StartFuncToFactory } from "./ToFactory/Entry.js";
import { StartFunc as StartFuncOrdersId } from "./OrdersId/Entry.js";

const StartFunc = () => {
    StartFuncToFactory();
    StartFuncOrdersId();
};

export { StartFunc };
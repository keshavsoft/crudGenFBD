import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncButtonClickFunc } from "./FetchFuncs/FromServer/OrdersData/2-ButtonClickFunc.js";

let StartFunc = async () => {
    StartFuncFormLoad();
    await StartFuncButtonClickFunc();
};

export { StartFunc }
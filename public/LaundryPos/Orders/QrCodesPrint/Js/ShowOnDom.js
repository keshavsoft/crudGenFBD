import { StartFunc as StartFuncButtonClickFunc } from "./FetchFuncs/FromServer/OrdersData/2-ButtonClickFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/EnteryFile.js";

let StartFunc = async () => {
    StartFuncFormLoad();
    await StartFuncButtonClickFunc();
};
export { StartFunc }
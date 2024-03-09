import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncToStaticDom } from "./ToStaticDom/AddListenerFuncs/StartFunc.js";

let StartFunc = () => {
    // Swal.fire("New Customer creat--");

    StartFuncToStaticDom();
    StartFuncFormLoad();
    StartFuncAddListeners();
};

StartFunc();

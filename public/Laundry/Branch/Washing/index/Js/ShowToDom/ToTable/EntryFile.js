import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";
import { StartFunc as StartFunconClickRowFunc } from "./onClickRowFunc.js";

const StartFunc = () => {
    let jVarLocalDataFromLocalStorage = StartFuncFromLocalStorage();

    var $table = $('#table')

    $table.bootstrapTable({
        data: jVarLocalDataFromLocalStorage,
        onClickRow: StartFunconClickRowFunc
    });
};

export { StartFunc };
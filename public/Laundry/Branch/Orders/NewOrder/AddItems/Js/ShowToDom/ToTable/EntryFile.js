import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";
import { StartFunc as StartFunconClickRowFunc } from "./onClickRowFunc.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";

const StartFunc = () => {
    let jVarLocalDataFromLocalStorage = StartFuncFromLocalStorage();

    var $table = $('#table')

    $table.bootstrapTable({
        data: jVarLocalDataFromLocalStorage,
        onPostBody: function () {
            StartFuncOnLoadSuccess();
            $("#TableFooterItemNameId").focus();
        },
        onClickRow: StartFunconClickRowFunc
    });
};

export { StartFunc };
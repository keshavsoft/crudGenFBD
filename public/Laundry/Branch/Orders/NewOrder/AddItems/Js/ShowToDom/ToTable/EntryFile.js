import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = () => {
    let jVarLocalDataFromLocalStorage = StartFuncFromLocalStorage();

    var $table = $('#table')

    $table.bootstrapTable("load", jVarLocalDataFromLocalStorage);

    // $table.bootstrapTable({
    //     data: jVarLocalDataFromLocalStorage,
    //     onPostBody: function () {
    //         StartFuncOnLoadSuccess();
    //         jFdate();
    //         $("#TableFooterItemNameId").focus();
    //     },
    //     onClickRow: StartFuncOnClickRowFunc
    // });
};

export { StartFunc };
import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    /* $table.attr( "data-show-columns","true"); */
    $table.bootstrapTable({
        data: [],
        detailView: true,
        onExpandRow: StartFuncOnExpandRow
    });
};

export { StartFunc };

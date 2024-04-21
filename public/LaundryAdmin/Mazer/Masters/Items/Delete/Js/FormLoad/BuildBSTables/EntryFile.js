import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        detailView: true,
        onExpandRow: StartFuncOnExpandRow
    });
};

export { StartFunc };

import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    /* $table.attr( "data-show-columns","true"); */
    $table.bootstrapTable({
        data: [],
        detailView: true,
        onExpandRow: StartFuncOnExpandRow
    });
    $table.on('post-header.bs.table', function () {
        $('.detail-icon').each(function () {
            $(this).html('<i class="bi bi-arrow-right-square-fill"></i>'); // Change the icon HTML here
        });
    });
};

export { StartFunc };

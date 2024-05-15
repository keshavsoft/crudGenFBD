import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');
    /* $table.attr( "data-show-columns","true"); */
    $table.bootstrapTable({
        data: [],
        detailView: true,
        onExpandRow: StartFuncOnExpandRow,
        icons: IconsJson
    });

    // $table.on('post-header.bs.table', function () {
    //     $('.detail-icon').each(function () {
    //         $(this).html('<i class="bi bi-arrow-right-square-fill"></i>'); // Change the icon HTML here
    //     });
    // });
};

export { StartFunc };

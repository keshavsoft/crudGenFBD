import { StartFunc as StartFuncAddOnButton } from "./AddOnButton.js";
import { StartFunc as StartFuncDeleteButton } from "./DeleteButton.js";

// const StartFunc1 = (row, $element, field) => {
//     if (field === 3) {
//         let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
//         let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
//         let jVarLocalItemSerial = row.ItemSerial;
//         let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

//         var $table = $('#AddOnTable');

//         $table.bootstrapTable("destroy");

//         $table.bootstrapTable({
//             data: jVarLocalFilterData,
//             onPostBody: StartFuncOnLoadSuccess
//         });

//         StartFuncShowOnModal(row);

//         $("#AddOnModal").modal("show");
//     };
// };

const StartFunc = (row, $element, field) => {
    if (field === 3) {
        StartFuncAddOnButton({ inRow: row });
    };

    if (field === 9) {
        StartFuncDeleteButton({ inRow: row });
    };
};
export { StartFunc };
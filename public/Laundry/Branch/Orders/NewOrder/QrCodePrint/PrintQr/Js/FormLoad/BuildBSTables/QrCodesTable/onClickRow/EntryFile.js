import { StartFunc as StartFuncMultipleQrCodeButtonId } from "./MultipleQrCodeButtonId/EntryFile.js";
// import { StartFunc as StartFuncDeleteButton } from "./DeleteButton.js";

const StartFunc = (row, $element, field) => {
    if (field === 4) {
        StartFuncMultipleQrCodeButtonId({ inRowData: row });
    };

    // if (field === 9) {
    //     StartFuncDeleteButton({ inRow: row });
    // };
};
export { StartFunc };
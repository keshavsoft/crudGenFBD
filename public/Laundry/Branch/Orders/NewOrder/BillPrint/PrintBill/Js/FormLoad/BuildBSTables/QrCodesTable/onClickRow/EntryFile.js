// import { StartFunc as StartFuncButtonClickFunc } from "./QRGenerate/2-ButtonClickFunc.js";
import { StartFunc as StartFuncButtonClickFunc } from "./MultipleQrCodeButtonId/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    if (field === 8) {
        StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };
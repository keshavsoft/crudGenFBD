import { StartFunc as StartFuncQrCodesTable } from "./QrCodesTable/EntryFile.js";
import { StartFunc as StartFuncParent } from "./Parent/EntryFile.js";

const StartFunc = () => {
    StartFuncQrCodesTable();
    StartFuncParent();

};

export { StartFunc };
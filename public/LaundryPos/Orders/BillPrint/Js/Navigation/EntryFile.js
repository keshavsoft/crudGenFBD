import { StartFunc as StartFuncQrCodesTable } from "./QrCodesTable/EntryFile.js";
import { StartFunc as StartFuncQrCodesPrint } from "./QrCodesPrint/EntryFile.js";
import { StartFunc as StartFuncBillPrint } from "./BillPrint/EntryFile.js";
import { StartFunc as StartFuncParent } from "./Parent/EntryFile.js";

const StartFunc = () => {
    // StartFuncQrCodesTable();
    // StartFuncQrCodesPrint();
    // StartFuncBillPrint();
    StartFuncParent();

};

export { StartFunc };
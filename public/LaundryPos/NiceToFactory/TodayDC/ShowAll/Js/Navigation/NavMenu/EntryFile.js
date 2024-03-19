import { StartFunc as StartFuncHome} from "./QrCodesTable/EntryFile.js";
import { StartFunc as StartFuncQrCodesPrint } from "./QrCodesPrint/EntryFile.js";
import { StartFunc as StartFuncBillPrint } from "./BillPrint/EntryFile.js";
import { StartFunc as StartFuncParent } from "./Parent/EntryFile.js";
import { StartFunc as StartFuncQrToRaiseId } from "./QrToRaiseId/EntryFile.js";

const StartFunc = () => {
    StartFuncHome();
    // StartFuncQrCodesPrint();
    // StartFuncBillPrint();
    StartFuncParent();
    // StartFuncQrToRaiseId();
};

export { StartFunc };
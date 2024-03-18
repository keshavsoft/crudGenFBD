import { StartFunc as StartFuncHome} from "./QrCodesTable/EntryFile.js";
import { StartFunc as StartFuncFilterShowAll } from "./QrCodesPrint/EntryFile.js";
import { StartFunc as StartFuncShowAllId } from "./BillPrint/EntryFile.js";
import { StartFunc as StartFuncParent } from "./Parent/EntryFile.js";
import { StartFunc as StartFuncQrToRaiseId } from "./QrToRaiseId/EntryFile.js";

const StartFunc = () => {
    StartFuncHome();
    StartFuncFilterShowAll();
    StartFuncShowAllId();
    // StartFuncParent();
    // StartFuncQrToRaiseId();
};

export { StartFunc };
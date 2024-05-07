import { StartFunc as StartFuncHome} from "./QrCodesTable/EntryFile.js";
import { StartFunc as StartFuncCustomerCreateId } from "./CustomerCreateId/EntryFile.js";
import { StartFunc as StartFuncCustomerCreateId1 } from "./CustomerCreateId1/EntryFile.js";
import { StartFunc as StartFuncParent } from "./Parent/EntryFile.js";
import { StartFunc as StartFuncQrToRaiseId } from "./QrToRaiseId/EntryFile.js";

const StartFunc = () => {
    StartFuncHome();
    StartFuncParent();
    StartFuncCustomerCreateId();
    StartFuncCustomerCreateId1();
};

export { StartFunc };
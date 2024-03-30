import { StartFunc as StartFuncToFactory } from "./ToFactory/Entry.js";
import { StartFunc as StartFuncOrdersId } from "./OrdersId/Entry.js";
import { StartFunc as StartFuncQrCodeId } from "./QrCodeId/Entry.js";
import { StartFunc as StartFuncMastersDashBoardId } from "./MastersDashBoardId/Entry.js";

const StartFunc = () => {
    StartFuncToFactory();
    StartFuncOrdersId();
    // StartFuncQrCodeId();
    // StartFuncQrCodeId();
    StartFuncMastersDashBoardId();
};

export { StartFunc };
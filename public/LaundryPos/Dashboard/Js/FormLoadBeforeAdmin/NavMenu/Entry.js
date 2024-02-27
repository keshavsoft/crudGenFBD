import { StartFunc as StartFuncToFactory } from "./ToFactory/Entry.js";
import { StartFunc as StartFuncOrdersId } from "./OrdersId/Entry.js";
import { StartFunc as StartFuncQrCodeId } from "./QrCodeId/Entry.js";

const StartFunc = () => {
    StartFuncToFactory();
    StartFuncOrdersId();
    StartFuncQrCodeId();
};

export { StartFunc };
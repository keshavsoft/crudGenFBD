import { StartFunc as StartFuncQrRefreshButton } from "./QrRefreshButton/EntryFile.js";
import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";
import { StartFunc as StartFuncFactoryScanButton } from "./FactoryScanButton/EntryFile.js";

let StartFunc = () => {
    StartFuncQrRefreshButton();
    StartFuncRefreshBSTableId();
    StartFuncFactoryScanButton();
};

export { StartFunc };
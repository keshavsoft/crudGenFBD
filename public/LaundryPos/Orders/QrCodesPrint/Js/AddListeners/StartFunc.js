import { StartFunc as StartFuncSettlementButtonClass } from "./SettlementButtonClass/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonClass } from "./MultipleQrCodeButtonId/1-ClickAssign.js";

let StartFunc = () => {
    StartFuncSettlementButtonClass();
    StartFuncMultipleQrCodeButtonClass();
    
};

export { StartFunc };
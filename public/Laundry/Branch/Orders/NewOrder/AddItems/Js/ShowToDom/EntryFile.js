import { StartFunc as StartFuncToTable } from "./ToTable/EntryFile.js";
import { StartFunc as StartFuncToModal } from "./ToModal/EntryFile.js";

const StartFunc = () => {
    StartFuncToTable();
    StartFuncToModal();
    // jFdate();
};

export { StartFunc }
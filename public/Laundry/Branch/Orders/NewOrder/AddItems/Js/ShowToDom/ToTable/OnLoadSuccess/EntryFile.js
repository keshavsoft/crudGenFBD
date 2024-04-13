import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";
import { StartFunc as StartFuncTableFooterCategoryId } from "./TableFooterCategoryId/EntryFile.js";
import { StartFunc as StartFuncTableFooterItemNameId } from "./TableFooterItemNameId/EntryFile.js";

let StartFunc = () => {
    StartFuncTableFooterSaveButtonId();
    StartFuncTableFooterCategoryId();
    StartFuncTableFooterItemNameId();
    // StartFuncTableFooterAccountNameSearchButtonId();
};

export { StartFunc };
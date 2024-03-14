import { StartFunc as StartFuncParentId } from "./ParentId/Entry.js";
import { StartFunc as StartFuncDashboardId } from "./DashboardId/Entry.js";
import { StartFunc as StartFuncBSTableFromScreen } from "./BSTableFromScreen/EntryFile.js";
import { StartFunc as StartFuncTotalQrsWithVoucherId } from "./TotalQrsWithVoucher/Entry.js";
import { StartFunc as StartFuncQrsWithTimeSpanId } from "./QrsWithTimeSpanId/Entry.js";
import { StartFunc as StartFuncCreate } from "./Create/Entry.js";

const StartFunc = () => {
    StartFuncParentId();
    StartFuncDashboardId();
    // StartFuncBSTableFromScreen();
    // StartFuncTotalQrsWithVoucherId();
    // StartFuncQrsWithTimeSpanId();
    // StartFuncCreate();
};

export { StartFunc };
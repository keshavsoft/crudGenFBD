import { StartFunc as StartFuncBSTableURL } from "./ParentId/Entry.js";
import { StartFunc as StartFuncDashboardId } from "./DashboardId/Entry.js";
import { StartFunc as StartFuncBSTableFromScreen } from "./BSTableFromScreen/EntryFile.js";
import { StartFunc as StartFuncTree } from "./Tree/Entry.js";
import { StartFunc as StartFuncTotalQrsWithVoucherId } from "./TotalQrsWithVoucher/Entry.js";
// import { StartFunc as StartFuncCreate } from "./Create/Entry.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncDashboardId();
    StartFuncBSTableFromScreen();
    StartFuncTree();
    StartFuncTotalQrsWithVoucherId();
    // StartFuncKSTree();
    // StartFuncCreate();
};

export { StartFunc };
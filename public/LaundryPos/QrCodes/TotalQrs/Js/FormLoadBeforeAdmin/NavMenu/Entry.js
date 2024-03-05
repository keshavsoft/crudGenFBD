import { StartFunc as StartFuncBSTableURL } from "./ParentId/Entry.js";
import { StartFunc as StartFuncDashboardId } from "./DashboardId/Entry.js";
import { StartFunc as StartFuncBSTableFromScreen } from "./BSTableFromScreen/EntryFile.js";
import { StartFunc as StartFuncTotalQrsWithVoucherId } from "./TotalQrsWithVoucher/Entry.js";
import { StartFunc as StartFuncKSTree } from "./KSTree/Entry.js";
import { StartFunc as StartFuncCreate } from "./Create/Entry.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncDashboardId();
    StartFuncBSTableFromScreen();
    StartFuncTotalQrsWithVoucherId();
    // StartFuncKSTree();
    // StartFuncCreate();
};

export { StartFunc };
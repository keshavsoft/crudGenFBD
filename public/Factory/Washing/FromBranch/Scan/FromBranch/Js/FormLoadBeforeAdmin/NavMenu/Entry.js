import { StartFunc as StartFuncBSTableURL } from "./BSTableURL/Entry.js";
import { StartFunc as StartFuncShowAlertURL } from "./ShowAlertURL/Entry.js";
import { StartFunc as StartFuncParentId } from "./ParentId/Entry.js";
import { StartFunc as StartFuncDashboardId } from "./DashboardId/Entry.js";

const StartFunc = () => {
    // StartFuncBSTableURL();
    // StartFuncShowAlertURL();
    StartFuncParentId();
    // StartFuncDashboardId();
};

export { StartFunc };
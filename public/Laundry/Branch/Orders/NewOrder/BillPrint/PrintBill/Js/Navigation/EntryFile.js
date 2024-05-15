import { StartFunc as StartFuncNavMenu } from "./NavMenu/EntryFile.js";
import { StartFunc as StartFuncBreadCumMenu } from "./BreadCumMenu/Entry.js";

const StartFunc = () => {
    StartFuncNavMenu();
    StartFuncBreadCumMenu();

};

export { StartFunc };
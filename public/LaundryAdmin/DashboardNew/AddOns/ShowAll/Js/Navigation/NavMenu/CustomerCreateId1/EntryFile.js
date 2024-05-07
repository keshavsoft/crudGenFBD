import { StartFunc as StartFuncURLNavigation } from "./URLNavigation.js";

let StartFunc = () => {
    let jVarLocalNavId = document.getElementById("CustomerCreateId1");
    jVarLocalNavId.addEventListener("click", StartFuncURLNavigation)
};

export { StartFunc };
import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "CustomerCreateID";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);

    jVarLocalLoadDataId.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }
import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalQrCodeButtonClass = document.getElementById("SearchButton");

    jVarLocalQrCodeButtonClass.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc };

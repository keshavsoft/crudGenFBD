import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalInputPkId = document.getElementById("SaveButtonId");

    if (jVarLocalInputPkId === null === false) {
        jVarLocalInputPkId.addEventListener("click", StartFuncButtonClickFunc);
    };
};
export { StartFunc };

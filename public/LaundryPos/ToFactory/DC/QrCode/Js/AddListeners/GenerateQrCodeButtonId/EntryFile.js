import { StartFunc as StartFuncClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalShowQrCodeButtonId = document.getElementsByClassName("QrCodeClassName");

    for (let i = 0; i < jVarLocalShowQrCodeButtonId.length; i++) {
        jVarLocalShowQrCodeButtonId[i].addEventListener("click", async (event) => StartFuncClickFunc({ inEvent: event }))
    };

};

export { StartFunc };
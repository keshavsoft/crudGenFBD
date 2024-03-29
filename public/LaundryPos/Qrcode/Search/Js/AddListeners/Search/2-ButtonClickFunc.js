import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";

let StartFunc = async () => {
    if (StartFuncCheckFunc) {
        let LocalSearchInput = document.getElementById("Search").value;

        const url = new URL(window.location.href);
        url.searchParams.append('QrCodeId', LocalSearchInput);
        window.location.href = url;


    };

};

export { StartFunc };
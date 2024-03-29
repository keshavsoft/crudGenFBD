import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";

let StartFunc = async () => {
    if (StartFuncCheckFunc) {
        let jVarLocalInputPkId = jFLocalFromDomInputPkId();
        let jVarLocalEval = "{{KS}}.split(\"~\")[0].search(\"-\") === -1 ? {{KS}}.split(\"~\")[0] : {{KS}}.split(\"~\")[0].split(\"-\")[1]";
        let jVarLocalId = eval(jVarLocalEval.replaceAll("{{KS}}", `"${jVarLocalInputPkId}"`));
        console.log("jVarLocalId:", jVarLocalId);
        const url = new URL(window.location.href);
        url.searchParams.append('QrCodeId', jVarLocalId);
        window.location.href = url;


    };

};

export { StartFunc };


let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'Search';
    let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
    let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
    return jVarHtmlInputPkIdValue;
};
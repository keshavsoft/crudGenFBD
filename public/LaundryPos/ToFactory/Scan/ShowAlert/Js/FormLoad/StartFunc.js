import { StartFunc as StartFuncDCDetails } from "./DCDetails/Entry.js";
import { StartFunc as StartFuncDCCount } from "./DCCount/Entry.js";

let StartFunc = () => {

    let jVarLocalVoucherRefValue = getUrlQueryParams({ inGetKey: "VoucherRef" });
    if (jVarLocalVoucherRefValue == "" && jVarLocalVoucherRefValue === null) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "VoucherRef Not Found in Params"

        });
    }
    jFLocalToInputInputVoucherRefId({ inInputVoucherRefId: jVarLocalVoucherRefValue })
    JFlocalShowAlertFunc();
    JFlocalNewPkAlertFunc();
    StartFuncDCDetails();
    StartFuncDCCount();
    jFLocalToInputBranchName();
    jFLocalBranchName()

};

const JFlocalShowAlertFunc = () => {
    let jVarLocalVoucherRefValue = getUrlQueryParams({ inGetKey: "ShowAlert" });
    let jvarLocalAlertId = document.getElementById("AlertSuccessId");

    if (jVarLocalVoucherRefValue) {
        jvarLocalAlertId.style.display = ""

    };
};

const JFlocalNewPkAlertFunc = () => {
    let jVarLocalVoucherRefValue = getUrlQueryParams({ inGetKey: "NewPk" });
    let jvarLocalAlertId = document.getElementById("AlertSuccessIdUserName");
    jvarLocalAlertId.innerHTML = jVarLocalVoucherRefValue;
};

let jFLocalToInputInputVoucherRefId = ({ inInputVoucherRefId }) => {
    let jVarLocalHtmlId = 'InputVoucherRefId';
    let jVarLocalInputVoucherRefId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputVoucherRefId.value = inInputVoucherRefId;
};

let jFLocalToInputBranchName = () => {
    let jVarLocalBranchNameparam = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalHtmlId = 'InputBranchNameId';
    let jVarLocalBranchName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBranchNameparam === null === false) {
        jVarLocalBranchName.value = jVarLocalBranchNameparam;
    };
};

let jFLocalBranchName = () => {
    let jVarLocalBranchNameparam = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalBranchName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBranchNameparam === null === false) {
        jVarLocalBranchName.innerHTML = jVarLocalBranchNameparam;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
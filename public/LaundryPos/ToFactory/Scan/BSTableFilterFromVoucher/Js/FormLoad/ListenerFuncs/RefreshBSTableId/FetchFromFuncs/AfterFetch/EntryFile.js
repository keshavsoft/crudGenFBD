import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";
// import { StartFunc as StartFuncPrepareColumns } from "./BuildTable/PrepareColumns.js";

let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    let jVarLocalVoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });
    if (jVarLocalVoucherRef === '' || jVarLocalVoucherRef === null) swal.fire({ title: "No VoucherRef in Params", icon: "error" })

    let LocalVoucherFilterData = jVarLocalDataToShow.filter(e => e.VoucherRef == jVarLocalVoucherRef);
    if (LocalVoucherFilterData.length === 0 || jVarLocalVoucherRef === null) swal.fire({ title: "No Data", icon: "error" })

    jFLocalHideSpinner();

    var $table = $('#table');

    // StartFuncPrepareColumns();

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalVoucherFilterData,
    });

    StartFuncKSMainTableRowDeleteClass();
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc }
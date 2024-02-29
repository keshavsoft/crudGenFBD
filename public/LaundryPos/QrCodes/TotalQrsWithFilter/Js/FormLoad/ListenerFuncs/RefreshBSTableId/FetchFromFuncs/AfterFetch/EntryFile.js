
let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    console.log("LocalDataToShow:",LocalDataToShow);
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let LocalFilterScanedData = LocalDataToShow.filter(e => e.BookingData.OrderData.BranchName == jVarLocalBranchName);
    if ((LocalFilterScanedData.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalFilterScanedData,
    });
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

let StartFunc = ({ inDataToShow, inQrCodeData, ScanedQrCodeData }) => {
    let LocalDataToShow = inDataToShow;

    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let LocalFilterQrCodeData = inQrCodeData.filter(e => e.BookingData.OrderData.BranchName == jVarLocalBranchName);
    let LocalFilterScanedQrData = ScanedQrCodeData.filter(e => e.BranchName == jVarLocalBranchName);

    let LocalFilterScanedData = jFLocalFilerFunc({ inQrCodeData: LocalFilterQrCodeData, ScanedQrCodeData: LocalFilterScanedQrData })
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

const jFLocalFilerFunc = ({ inQrCodeData, ScanedQrCodeData }) => {
    let StatusData = inQrCodeData.map(element => {
        element.Status = ""
        let someData = ScanedQrCodeData.filter(e => {
            if (e.QrCodeId == element.pk) {
                element.Status = "Scaned"
                element.VoucherNumber = e.VoucherNumber;
                element.DCFactory = e.DCFactory;
                return element;
            }
        });
        return element;
    });
    return StatusData

};
export { StartFunc }
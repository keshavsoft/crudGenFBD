
let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    let LocalFilterData = LocalDataToShow.filter(e => e.todayTotalCount !== 0)

    let LocalmodifiedData = jFLocalShowDateDiffInMinSec({ inData: LocalFilterData });

    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    jFLocalHideSpinner();

    let LocalSortedData = LocalmodifiedData.sort((a, b) => b.todayTotalCount - a.todayTotalCount);

    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalSortedData
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowDateDiffInMinSec = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.SentInterVal = ""
        element.OrderDate = ""
        if ((element.todayFirstOrder === "") === false) {
            element.SentInterVal = jFLocalKInterval({ inCurrentdateandtime: element.todayFirstOrder.OrderData.Currentdateandtime });
            element.OrderDate = element.todayFirstOrder.OrderData.Currentdateandtime;

            element.FirstInterval = jFLocalKInterval({ inCurrentdateandtime: element.firstOrder.OrderData.Currentdateandtime });

            return element;
        };
        return element;
    });
    return jVarLocalReturnArray;
};

let jFLocalKInterval = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === undefined) {
        return "";
    }
    var diffMs = (new Date() - new Date(inCurrentdateandtime)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";

    // console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...");
};


export { StartFunc }
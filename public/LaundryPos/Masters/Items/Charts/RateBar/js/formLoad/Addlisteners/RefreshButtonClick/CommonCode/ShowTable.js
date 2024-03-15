const StartFunc1 = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("tableData");

    let LocalColumnsKeysArray = JSON.parse(jVarLocalDataFromLocalStorage);

    let LocalDataToShow = LocalColumnsKeysArray;
    
    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    // jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jFSortData({ inDataToSort: LocalDataToShow }),
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        }
    });
};

const StartFunc = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("tableData");

    let LocalColumnsKeysArray = JSON.parse(jVarLocalDataFromLocalStorage);

    let LocalDataToShow = LocalColumnsKeysArray;

    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    let jVarLocalRatesOnly = jFRatesOnly({ inData: LocalDataToShow });
    let jVarLocalItemNamesOnly = jFItemNamesOnly({ inData: LocalDataToShow });

    const ctx = document.getElementById('barChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: jVarLocalItemNamesOnly,
            datasets: [{
                label: 'Wash Rates',
                data: jVarLocalRatesOnly,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

let jFRatesOnly = ({ inData }) => {
    let jVarLocalDataAfterSort = _.map(inData, 'DryWashRate');

    return jVarLocalDataAfterSort;
};

let jFItemNamesOnly = ({ inData }) => {
    let jVarLocalDataAfterSort = _.map(inData, 'ItemName');

    return jVarLocalDataAfterSort;
};

export { StartFunc };
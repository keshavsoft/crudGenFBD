const StartFunc = () => {
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

let jFSortData = ({ inDataToSort }) => {
    let jVarLocalDataAfterSort = _.sortBy(inDataToSort, ['Category', 'ItemName']);

    return jVarLocalDataAfterSort;
};

export { StartFunc };
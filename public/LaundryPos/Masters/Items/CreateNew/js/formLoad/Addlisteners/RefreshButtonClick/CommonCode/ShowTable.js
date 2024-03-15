const StartFunc = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("tableData");

    let LocalColumnsKeysArray = JSON.parse(jVarLocalDataFromLocalStorage);


    let LocalDataToShow = LocalColumnsKeysArray;
    console.log("LocalDataToShow:", LocalDataToShow);
    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    // jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalDataToShow,
    });
};



export { StartFunc };
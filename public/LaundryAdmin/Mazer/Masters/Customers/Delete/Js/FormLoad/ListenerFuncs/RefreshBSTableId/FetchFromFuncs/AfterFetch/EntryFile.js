let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow.sort((a, b) => a.CustomerName.localeCompare(b.CustomerName));

    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });
    
    jFLocalHideSpinner();
    
    var $table = $('#table');

    $table.bootstrapTable("load", LocalDataToShow);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }
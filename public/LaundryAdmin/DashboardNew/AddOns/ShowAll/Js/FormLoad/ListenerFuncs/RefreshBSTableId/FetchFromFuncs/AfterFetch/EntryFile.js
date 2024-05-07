let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow.sort((a, b) => a.CustomerName.localeCompare(b.CustomerName));

    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    var $table = $('#table');
    
    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalDataToShow,
    });
};

export { StartFunc }
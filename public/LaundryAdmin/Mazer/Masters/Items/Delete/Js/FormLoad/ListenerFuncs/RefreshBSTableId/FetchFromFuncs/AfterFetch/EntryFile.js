import { StartFunc as StartFuncAddListeners } from "../../../../../AddListeners/StartFunc.js";

let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow.sort((a, b) => a.CustomerName.localeCompare(b.CustomerName));

    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    var $table = $('#table');

    $table.bootstrapTable("load", LocalDataToShow);

    // $table.bootstrapTable("destroy").bootstrapTable({
    //     data: LocalDataToShow,
    // });

    // StartFuncAddListeners();
};

export { StartFunc }
import { StartFunc as StartFuncAddListeners } from "../../../../../AddListeners/StartFunc.js";


let StartFunc = ({ inDataToShow }) => {
    // let LocalDataToShow = inDataToShow;

    let LocalDataToShow = inDataToShow.sort((a, b) => a.AddOnService.localeCompare(b.AddOnService));
    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });
    document.getElementById("CustomrtCountId").innerHTML = LocalDataToShow.length;

    jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalDataToShow,
    });
    StartFuncAddListeners();
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};



export { StartFunc }
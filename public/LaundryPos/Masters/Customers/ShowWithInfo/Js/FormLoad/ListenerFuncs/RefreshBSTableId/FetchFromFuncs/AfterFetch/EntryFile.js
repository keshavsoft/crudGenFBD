import { StartFunc as StartFuncManipulateData } from './ManipulateData.js'

let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    let jVarLocalAfterManipulation = StartFuncManipulateData({ inData: LocalDataToShow });
    console.log("jVarLocalAfterManipulation : ", jVarLocalAfterManipulation);
    if ((jVarLocalAfterManipulation.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    jFLocalHideSpinner();

    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalAfterManipulation
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};


export { StartFunc }
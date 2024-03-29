
let StartFunc = ({ inDataToShow }) => {
    const LocalDataToShow = inDataToShow;

    LocalFuncForAddons({ inData: LocalDataToShow });

}



let LocalFuncForAddons = ({ inData }) => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let LocalFilterdata = inData.filter(e => e.BranchName == jVarLocalBranchName);

    var $table = $('#Dctable');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalFilterdata,
    });
};




export { StartFunc }
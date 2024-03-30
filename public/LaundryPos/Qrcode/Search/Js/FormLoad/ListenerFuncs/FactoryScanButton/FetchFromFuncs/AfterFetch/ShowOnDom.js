
let StartFunc = ({ inDataToShow }) => {
    const LocalFilterdata = inDataToShow;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    // let LocalFilterdata = LocalDataToShow.filter(e => e.BranchName == jVarLocalBranchName);
    if (LocalFilterdata.length === 0) {
        return
    };


    LocalFuncForDCpk({ inData: LocalFilterdata[0].VoucherRef });
    LocalFuncForVoucherNumber({ inData: LocalFilterdata[0].pk });
    LocalFuncForDDcDate({ inData: LocalFilterdata[0].DCDate });
    LocalFuncForDCFactory({ inData: LocalFilterdata[0].DCFactory });
    LocalFuncForDCDescription({ inData: LocalFilterdata[0].DCDescription });
    LocalFuncForVoucherDate({ inData: LocalFilterdata[0].DateTime });

}



let LocalFuncForDCpk = ({ inData }) => {
    let jVarLocalpk = document.getElementById('FactoryDcNumber');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForVoucherNumber = ({ inData }) => {
    let jVarLocalpk = document.getElementById('FactoryVoucherNumber');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForDDcDate = ({ inData }) => {

    let jVarLocalpk = document.getElementById('FactoryDcDate');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForDCFactory = ({ inData }) => {

    let jVarLocalpk = document.getElementById('FactoryDCFactory');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForDCDescription = ({ inData }) => {

    let jVarLocalpk = document.getElementById('FactoryDCDescription');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForVoucherDate = ({ inData }) => {

    let jVarLocalpk = document.getElementById('FactoryVoucherdate');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};



export { StartFunc }
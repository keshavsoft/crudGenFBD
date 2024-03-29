
let StartFunc = ({ inDataToShow }) => {
    const LocalDataToShow = inDataToShow;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let LocalFilterdata = LocalDataToShow.filter(e => e.BranchName == jVarLocalBranchName);
    console.log("LocalFilterdata:",LocalFilterdata[0].DCDescription);


    LocalFuncForDCpk({ inData: LocalFilterdata[0].VoucherRef });
    LocalFuncForVoucherNumber({ inData: LocalFilterdata[0].pk });
    LocalFuncForDDcDate({ inData: LocalFilterdata[0].DCDate });
    LocalFuncForDCFactory({ inData: LocalFilterdata[0].DCFactory });
    LocalFuncForDCDescription({ inData: LocalFilterdata[0].DCDescription });
    LocalFuncForVoucherDate({ inData: LocalFilterdata[0].DateTime });

}



let LocalFuncForDCpk = ({ inData }) => {
    let jVarLocalpk = document.getElementById('DcNumber');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForVoucherNumber = ({ inData }) => {
    let jVarLocalpk = document.getElementById('VoucherNumber');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForDDcDate = ({ inData }) => {

    let jVarLocalpk = document.getElementById('DcDate');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForDCFactory = ({ inData }) => {

    let jVarLocalpk = document.getElementById('DCFactory');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForDCDescription = ({ inData }) => {

    let jVarLocalpk = document.getElementById('DCDescription');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};

let LocalFuncForVoucherDate = ({ inData }) => {

    let jVarLocalpk = document.getElementById('Voucherdate');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inData
    };
};



export { StartFunc }
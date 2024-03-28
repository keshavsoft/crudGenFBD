
let StartFunc = ({ inDataToShow }) => {
    const firstObject = inDataToShow[0];
    console.log("LocalDataToShow", firstObject);
    LocalFuncForpk({ inValue: firstObject.pk })
    LocalFuncForCustomerName({ inValue: firstObject.CustomerData.CustomerName })
    LocalFuncForMobile({ inValue: firstObject.CustomerData.CustomerMobile })
    LocalFuncFordate({ inValue: firstObject.OrderData.Currentdateandtime })
    // LocalFuncForAmount({ inValue: firstObject.OrderData.Currentdateandtime })

};

let LocalFuncForpk = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('OrderNo');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForCustomerName = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('CustomerName');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForMobile = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('Mobile');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncFordate = ({ inValue }) => {
    let LocalDate = new Date(inValue).toLocaleDateString('en-GB');
    let jVarLocalpk = document.getElementById('Date');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = LocalDate
    };
};

let LocalFuncForAmount = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('Settlement');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = LocalDate
    };
};



export { StartFunc }

let StartFunc = ({ inDataToShow }) => {
    const firstObject = inDataToShow[0];

    LocalFuncForAddons({ inData: firstObject.BookingData.AddOnData, QrPk: firstObject.pk })
    LocalFuncForpk({ inValue: firstObject.pk })
    LocalFuncForItemName({ inValue: firstObject.ItemName })
    LocalFuncForMobile({ inValue: firstObject.Total })
    LocalFuncFordate({ inValue: firstObject.DateTime })
    LocalFuncForfullName({ inValue: firstObject.BookingData.CustomerData.CustomerName })
    LocalFuncForPhone({ inValue: firstObject.BookingData.CustomerData.CustomerMobile })
    LocalFuncForCashAmount({ inValue: firstObject.BookingData.CheckOutData[1].CashAmount })
    LocalFuncForUPIAmount({ inValue: firstObject.BookingData.CheckOutData[1].UPIAmount })
    LocalFuncForCardAmount({ inValue: firstObject.BookingData.CheckOutData[1].CardAmount })
    LocalFuncForDiscountAmount({ inValue: firstObject.BookingData.CheckOutData[1].GstData.DiscountAmount })
    LocalFuncForSGST({ inValue: firstObject.BookingData.CheckOutData[1].GstData.SGST })
    LocalFuncForCGST({ inValue: firstObject.BookingData.CheckOutData[1].GstData.CGST })
    LocalFuncForRoundOff({ inValue: firstObject.BookingData.CheckOutData[1].RoundOff })
    LocalFuncForBookingDate({ inValue: firstObject.BookingData.OrderData.Currentdateandtime })
    LocalFuncForDeliveryDate({ inValue: firstObject.DeliveryDateTime })
    LocalFuncForBookingDataNumber({ inValue: firstObject.GenerateReference.ReferncePk })
    // LocalFuncForAmount({ inValue: firstObject.OrderData.Currentdateandtime })

};

let LocalFuncForpk = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('OrderNo');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForItemName = ({ inValue }) => {
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

let LocalFuncForfullName = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('fullName');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForPhone = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('Phone');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForCashAmount = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('CashAmount');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForUPIAmount = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('UPIAmount');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForCardAmount = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('CardAmount');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForDiscountAmount = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('DiscountAmount');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForSGST = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('SGST');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForCGST = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('CGST');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForRoundOff = ({ inValue }) => {
    let jVarLocalpk = document.getElementById('RoundOff');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};

let LocalFuncForBookingDate = ({ inValue }) => {
    let LocalDate = new Date(inValue).toLocaleDateString('en-GB');

    let jVarLocalpk = document.getElementById('BookingDate');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = LocalDate
    };
};

let LocalFuncForDeliveryDate = ({ inValue }) => {
    let LocalDate = new Date(inValue).toLocaleDateString('en-GB');

    let jVarLocalpk = document.getElementById('DeliveryDate');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = LocalDate
    };
};

let LocalFuncForBookingDataNumber = ({ inValue }) => {

    let jVarLocalpk = document.getElementById('BookingDataNumber');

    if (jVarLocalpk === null === false) {
        jVarLocalpk.value = inValue
    };
};





let LocalFuncForAddons = ({ inData, QrPk }) => {
    let dataArray = [];

    for (let key in inData) {
        if (inData.hasOwnProperty(key)) {
            dataArray.push(inData[key]);
        };
    };
    let LocalFilterdata = dataArray.filter(e => e.AddOnItemSerial == QrPk);

    jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalFilterdata,
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};


export { StartFunc }
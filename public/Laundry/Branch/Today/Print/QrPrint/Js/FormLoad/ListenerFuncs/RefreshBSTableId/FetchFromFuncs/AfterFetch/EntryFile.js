import { StartFunc as StartFuncAddListeners } from "../../../../../AddListeners/StartFunc.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId } from "./MultipleQrCodeButtonId/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId1 } from "./MultipleQrCodeButtonId1/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId2 } from "./MultipleQrCodeButtonId2/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId3 } from "./MultipleQrCodeButtonId3/EntryFile.js";

let StartFunc = ({ inDataToShow, inQrCodeData }) => {
    jFLocalHideSpinner();
    let LocalinDataToShow = inDataToShow;
    var $table = $('#table');
    let jVarLocalTransformedData = jFLocalInsertAggValues({ inData: LocalinDataToShow });
    let jVarWithQrCodeData = jFLocalInsertQrCodeData({ inData: jVarLocalTransformedData, inQrCodeData: inQrCodeData });
    let LocalArrayReverseData = jVarWithQrCodeData.slice().reverse();

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalArrayReverseData,
        onClickRow: jFLocalClickRow,
        onClickRow: jFLocalClickRow1,
        onClickRow: jFLocalClickRow2,
        onClickRow: jFLocalClickRow3
    });

    StartFuncAddListeners();
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};


let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val, 0)}`;

        element[1].AggValues.SettlementAmount = ""
        if (Object.values(element[1].CheckOutData)[0]) {
            element[1].AggValues.SettlementAmount = Object.values(element[1].CheckOutData)[0].CardAmount + Object.values(element[1].CheckOutData)[0].CashAmount + Object.values(element[1].CheckOutData)[0].UPIAmount;
            element[1].IsSettled = false;
        };
        if (Object.keys(element[1].CheckOutData).length > 0) {
            element[1].IsSettled = true;
        };

        return element[1];
    });

    return jVarLocalReturnObject;
};

let jFLocalInsertQrCodeData = ({ inData, inQrCodeData }) => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalReturnArray = [];
    inData.forEach(element => {
        element.IsQrCodesRaised = false;
        element.TotalItems = 0;
        let FilterCheck = inQrCodeData.filter(ele => ele.OrderNumber == element.pk && ele.BookingData.OrderData.BranchName == jVarLocalBranchName);
        if (FilterCheck.length > 0) {
            element.TotalItems = FilterCheck.length
            element.IsQrCodesRaised = true;
        };
        jVarLocalReturnArray.push(element)
    });

    return jVarLocalReturnArray;
};

let jFLocalClickRow = (row, $element, field) => {
    console.log("field:", field);
    if (field === 5) {
        StartFuncMultipleQrCodeButtonId({ inRowpk: row.pk }).then();
    };
};

let jFLocalClickRow1 = (row, $element, field) => {
    console.log("field1:", field);

    if (field === 6) {
        StartFuncMultipleQrCodeButtonId1({ inRowpk: row.pk }).then();
    };
};

let jFLocalClickRow2 = (row, $element, field) => {
    console.log("field2:", field);

    if (field === 7) {
        StartFuncMultipleQrCodeButtonId2({ inRowpk: row.pk }).then();
    };
};

let jFLocalClickRow3 = (row, $element, field) => {
    console.log("field3:", field);

    if (field === 8) {
        StartFuncMultipleQrCodeButtonId3({ inRowpk: row.pk }).then();
    };
};



export { StartFunc }
// import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";
import { StartFunc as StartFuncAddListeners } from "../../../../../AddListeners/StartFunc.js";

let StartFunc = ({ inDataToShow, inQrCodeData }) => {
    jFLocalHideSpinner();
    let LocalinDataToShow = inDataToShow;
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });

    var $table = $('#table');
    let jVarLocalTransformedData = jFLocalInsertAggValues({ inData: LocalinDataToShow });
    let jVarWithQrCodeData = jFLocalInsertQrCodeData({ inData: jVarLocalTransformedData, inQrCodeData: inQrCodeData });
    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarWithQrCodeData,
    });

    StartFuncAddListeners();
    // StartFuncKSMainTableRowDeleteClass();
};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                UuId: key
            });
        }
    );

    return jVarLocalArray;
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};


let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${(parseInt(element[0]) + 1)} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val, 0)}`;

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

    let jVarLocalReturnArray = [];
    inData.forEach(element => {
        element.IsQrCodesRaised = false;
        element.TotalItems = 0;
        let FindCheck = inQrCodeData.find(ele => ele.OrderNumber == element.pk);
        if (FindCheck) {
            element.TotalItems = Math.max(...Object.keys(element.ItemsInOrder))
            element.IsQrCodesRaised = true;
        };
        jVarLocalReturnArray.push(element)
    });
    return jVarLocalReturnArray;
};


export { StartFunc }
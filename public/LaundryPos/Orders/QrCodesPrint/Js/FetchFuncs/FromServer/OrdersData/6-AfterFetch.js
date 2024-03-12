let StartFunc = ({ inFromFetch }) => {

    let data = inFromFetch;

    if (data) {
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jFLocalInsertAggValues({ inData: data }));


    };
};

let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = {};

    jVarLocalReturnObject = ((inData).map(element => {
        element.AggValues = {};
        if (Object.keys(element.ItemsInOrder).length > 0) element.AggValues.ItemDetails = `
        ${Object.keys(element.ItemsInOrder).length} / ${(Object.values(element.ItemsInOrder)).map(p => p.Pcs).reduce((acc, val) => acc + val)}`;
        element.AggValues.SettlementAmount = "0";

        if (Object.values(element.CheckOutData)[0]) element.AggValues.SettlementAmount = Object.values(element.CheckOutData)[0].CardAmount + Object.values(element.CheckOutData)[0].CashAmount + Object.values(element.CheckOutData)[0].UPIAmount;
        return element;
    }));
    let LocalArrayreverseData = jVarLocalReturnObject.slice().reverse();

    return LocalArrayreverseData;
};

export { StartFunc };
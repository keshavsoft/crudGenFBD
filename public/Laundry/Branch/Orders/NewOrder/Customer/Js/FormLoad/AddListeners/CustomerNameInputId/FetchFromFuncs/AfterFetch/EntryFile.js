import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";

let StartFunc = (inData) => {
    let jVarLocalData = inData;
    let jVarLocalOrdered = jVarLocalData.sort((x, y) => ((x.pk === y.pk) ? 0 : ((x.pk < y.pk) ? 1 : -1)));
    let jVarLocalWithAggValues = jFLocalInsertAggValues({ inData: jVarLocalOrdered });
    let jVarLocalColumnsArray = jFLocalTableColumns();

    var $table = $('#table')

    // $table.bootstrapTable("destroy");
    // // $table.bootstrapTable();
    // $table.bootstrapTable({
    //     data: jVarLocalWithAggValues
    // });
    $table.bootstrapTable({
        data: jVarLocalWithAggValues,
        detailView: true,
        onExpandRow: StartFuncOnExpandRow
    })
};

let jFLocalTableColumns = () => {
    return [{
        "field": "pk",
        "title": "pk"
    },
    {
        "field": "OrderData.Currentdateandtime",
        "title": "Date"
    },
    {
        "field": "AggValues.ItemDetails",
        "title": "ItemDetails"
    },
    {
        "field": "AggValues.SettlementAmount",
        "title": "Settlement"
    },
    {
        "field": "IsSettled",
        "title": "IsSettled"
    }
    ]

};

let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalData = inData;
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = jVarLocalData.map(element => {
        element.AggValues = {};
        element.AggValues.ItemDetails = `${Object.keys(element.ItemsInOrder).length} / ${Object.values(element.ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val, 0)}`;

        element.AggValues.SettlementAmount = ""

        if (Object.values(element.CheckOutData)[0]) {
            element.AggValues.SettlementAmount = Object.values(element.CheckOutData)[0].CardAmount + Object.values(element.CheckOutData)[0].CashAmount + Object.values(element.CheckOutData)[0].UPIAmount;
            element.IsSettled = false;
        };

        if (Object.keys(element.CheckOutData).length > 0) {
            element.IsSettled = true;
        };

        let jVarLocalAddOnArray = Object.values(element.AddOnData);

        element.AggValues.ItemsArray = Object.values(element.ItemsInOrder).map(element => {
            element.AddOnDataAsArray = jVarLocalAddOnArray.filter(LoopInside => LoopInside.AddOnItemSerial === element.ItemSerial);
            return element;
        });

        return element;
    });

    return jVarLocalReturnObject;
};

export { StartFunc };
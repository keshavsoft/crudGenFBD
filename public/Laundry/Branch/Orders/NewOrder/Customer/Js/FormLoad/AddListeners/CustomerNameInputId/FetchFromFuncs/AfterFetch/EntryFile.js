import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";

let StartFunc = (inData) => {
    let jVarLocalData = inData;
    let jVarLocalOrdered = jVarLocalData.sort((x, y) => ((x.pk === y.pk) ? 0 : ((x.pk < y.pk) ? 1 : -1)));
    let jVarLocalWithAggValues = jFLocalInsertAggValues({ inData: jVarLocalOrdered });

    var $table = $('#table')

    // $table.bootstrapTable("destroy");
    // // $table.bootstrapTable();
    // $table.bootstrapTable({
    //     data: jVarLocalWithAggValues
    // });
    $table.bootstrapTable({
        columns: [{
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
        ],
        data: jVarLocalWithAggValues,
        detailView: true,
        onExpandRow: StartFuncOnExpandRow
    })
};

let jF1 = () => {
    $table.bootstrapTable({
        columns: [{
            "field": "Name",
            "title": "Name"
        }],
        data: [{
            Name: "Keshav"
        },
        {
            Name: "Chakri"
        }],
        detailView: true,
        onExpandRow: function (index, row, $detail) {
            let jVarLocalInsideTable = $detail.html('<table></table>').find('table');

            jVarLocalInsideTable.bootstrapTable({
                columns: [{
                    "field": "Mobile",
                    "title": "Mobile"
                }],
                data: [{
                    Mobile: "111111111"
                },
                {
                    Mobile: "2222222222222"
                }],
                detailView: true,
                onExpandRow: function (index, row, $detail) {
                    let jVarLocalInsideTable2 = $detail.html('<table></table>').find('table');

                    jVarLocalInsideTable2.bootstrapTable({
                        columns: [{
                            "field": "AddOns",
                            "title": "AddOns"
                        }],
                        data: [{
                            AddOns: "aaaaaaaa"
                        },
                        {
                            AddOns: "bbbbbbbbbb"
                        }],
                        detailView: true,
                        onExpandRow: function (index, row, $detail) {
                            /* eslint no-use-before-define: ["error", { "functions": false }]*/
                            console.log(index, row, $detail.html('<table></table>').find('table'));
                        }
                    })



                }
            })


        }
    })

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

        element.AggValues.ItemsArray = Object.values(element.ItemsInOrder).map(element => {
            return element;
        });

        return element;
    });

    return jVarLocalReturnObject;
};

export { StartFunc };
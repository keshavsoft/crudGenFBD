import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";

let StartFunc = (index, row, $detail) => {
    let jVarLocalDataArray = row.AggValues.ItemsArray;

    let jVarLocalInsideTable = $detail.html('<table></table>').find('table');

    jVarLocalInsideTable.bootstrapTable({
        columns: [{
            "field": "ItemSerial",
            "title": "ItemSerial"
        },
        {
            "field": "Category",
            "title": "Category"
        },
        {
            "field": "ItemName",
            "title": "ItemName"
        },
        {
            "field": "Rate",
            "title": "Rate"
        },
        {
            "field": "Pcs",
            "title": "Pcs"
        },
        {
            "field": "location",
            "title": "location"
        },
        {
            "field": "DeliveryDateTime",
            "title": "DeliveryDateTime"
        }],
        data: jVarLocalDataArray,
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

export { StartFunc };
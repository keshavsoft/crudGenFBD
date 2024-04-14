let StartFunc = (index, row, $detail) => {
    let jVarLocalDataArray = row.AddOnDataAsArray;
    console.log("jVarLocalAddOnArray : ", row.AddOnDataAsArray);
    let jVarLocalInsideTable = $detail.html('<table></table>').find('table');

    jVarLocalInsideTable.bootstrapTable({
        columns: [{
            "title": "#",
            "formatter": "jFLocalSerialColumn"
        },
        {
            "field": "AddOnService",
            "title": "AddOnService"
        },
        {
            "field": "AddOnRate",
            "title": "AddOnRate"
        }
        ],
        data: jVarLocalDataArray
    })

};

export { StartFunc };
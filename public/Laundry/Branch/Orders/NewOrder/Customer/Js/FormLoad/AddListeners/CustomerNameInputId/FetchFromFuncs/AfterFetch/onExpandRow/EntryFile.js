import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";

let StartFunc = (index, row, $detail) => {
    let jVarLocalDataArray = row.AggValues.ItemsArray;
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForSubTable");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);
    console.log("clone : ", clone);
    let jVarLocalInsideTable = $detail.html(str).find('table');

    jVarLocalInsideTable.bootstrapTable({
        data: jVarLocalDataArray,
        detailView: true,
        onExpandRow: StartFuncOnExpandRow
    })

};

let jFLocalTableColumns = () => {
    [{
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
    }]
};

export { StartFunc };
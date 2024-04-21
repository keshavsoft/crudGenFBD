let StartFunc = (index, row, $detail) => {
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForRow");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalCustomerNameId = $detail.html(str).find('#CustomerNameId');

    jVarLocalCustomerNameId[0].value = row.CustomerName;
};

export { StartFunc };
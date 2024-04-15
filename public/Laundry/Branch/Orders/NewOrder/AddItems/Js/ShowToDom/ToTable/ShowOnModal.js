let StartFunc = (row) => {
    jFLocalToInputAddOnModalItemNameId(row.ItemName);
};

let jFLocalToInputAddOnModalItemNameId = (inValue) => {
    let jVarLocalHtmlId = 'AddOnModalItemNameId';
    let jVarLocalAddOnModalItemNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddOnModalItemNameId === null === false) {
        jVarLocalAddOnModalItemNameId.value = inValue;
    };
};

export { StartFunc };
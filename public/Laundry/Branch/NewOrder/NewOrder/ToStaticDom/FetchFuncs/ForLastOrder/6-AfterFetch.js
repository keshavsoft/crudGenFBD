let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    if (data) {
        if (data.KTF === false) {
            return false;
        };
        if (data.RowCount === undefined) {
            inOrderNumberId = 0;
        }
        jFLocalToInnerHtmlOrderNumberId({ inOrderNumberId: data.RowCount });
    };
};

let jFLocalToInnerHtmlOrderNumberId = ({ inOrderNumberId }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.innerHTML = inOrderNumberId;
};

export { StartFunc };
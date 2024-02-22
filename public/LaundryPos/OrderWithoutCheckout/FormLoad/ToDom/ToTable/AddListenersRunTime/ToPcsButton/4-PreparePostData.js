const StartFunc = ({ inPcs, inItemSerial }) => {
    let jVarLocalOrderNumber = jFLocalFromDomOrderNumberId();
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    console.log("jVarLocalBranchName:",jVarLocalBranchName);

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.JsonConfig = {};
    jVarLocalToLocalStorage.InsertKey = "ItemsInOrder";

    jVarLocalToLocalStorage.MainRowPK = jVarLocalOrderNumber;
    jVarLocalToLocalStorage.SubTableRowPK = inItemSerial;
    jVarLocalToLocalStorage.inDataToUpdate = {};
    jVarLocalToLocalStorage.inDataToUpdate.Pcs = parseInt(inPcs);
    return jVarLocalToLocalStorage;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML.trim();
    return jVarHtmlOrderNumberIdValue;
};

export { StartFunc };
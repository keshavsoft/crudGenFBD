const StartFunc = ({ inPcs, inItemSerial }) => {
    let jVarLocalOrderNumber = jFLocalFromDomOrderNumberId();
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.BodyData = {};
    jVarLocalToLocalStorage.BranchName = jVarLocalBranchName;
    jVarLocalToLocalStorage.MainRowPK = jVarLocalOrderNumber;

    jVarLocalToLocalStorage.BodyData.FindKey = `ItemsInOrder.${inItemSerial}.Pcs`
    jVarLocalToLocalStorage.BodyData.ReplaceValue = parseInt(inPcs);

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
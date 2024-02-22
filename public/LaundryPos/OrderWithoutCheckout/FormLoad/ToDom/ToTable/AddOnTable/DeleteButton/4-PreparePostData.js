const StartFunc = ({ inRowPk }) => {
    let jVarLocalOrderNumber = jFLocalFromDomOrderNumberId();
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" })

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.inKey = "AddOnData";
    jVarLocalToLocalStorage.BranchName = jVarLocalBranchName;

    jVarLocalToLocalStorage.MainRowPK = jVarLocalOrderNumber;
    jVarLocalToLocalStorage.RowPK = inRowPk;
    return jVarLocalToLocalStorage;
};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML.trim();
    return jVarHtmlOrderNumberIdValue;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };
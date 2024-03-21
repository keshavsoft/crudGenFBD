const StartFunc = ({ inItemSerial }) => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" })
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" })

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.BranchName = jVarLocalBranchName;

    jVarLocalToLocalStorage.RowPK = inItemSerial;
    jVarLocalToLocalStorage.MainRowPK = jVarLocalOrderNumber;
    jVarLocalToLocalStorage.inKey = "ItemsInOrder";

    return jVarLocalToLocalStorage;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };
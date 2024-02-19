let StartFunc = () => {
    let jVarLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" })

    return jVarLocalOrderNumber;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
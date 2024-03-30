let StartFunc = () => {
    let jVarLocalVoucherRefValue = getUrlQueryParams({ inGetKey: "VoucherRef" });
    // let jVarLocalFactoryName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalFactoryName = localStorage.getItem("FactoryName");

    
    if (jVarLocalVoucherRefValue === "" || jVarLocalVoucherRefValue === null) Swal.fire({
        icon: "error",
        title: "Error",
        text: "VoucherRef Not Found in Params"

    });

    if (jVarLocalFactoryName === "" || jVarLocalFactoryName === null) Swal.fire({
        icon: "error",
        title: "Error",
        text: "BranchName Not Found in Params"

    });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
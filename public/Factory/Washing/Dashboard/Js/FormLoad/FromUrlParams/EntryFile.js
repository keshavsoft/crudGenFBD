let StartFunc = () => {
    // let jVarLocalFactoryName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalFactoryName = localStorage.getItem("FactoryName");

    if (jVarLocalFactoryName === null) {
        Swal.fire({
            title: "BranchName!",
            text: "Not found in URL!",
            icon: "error"
        });
    };

    document.getElementById("FactoryNameId").innerHTML = jVarLocalFactoryName;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
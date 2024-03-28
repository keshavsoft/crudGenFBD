let StartFunc = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalReferncePk = getUrlQueryParams({ inGetKey: "ReferncePk" });

    if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ icon: "error", text: "No Branch on Params" });
    if (jVarLocalReferncePk === "" || jVarLocalReferncePk === null) {
        Swal.fire({
            title: "Enter your Order Number",
            input: "number",
            inputValidator: (value) => {
                if (value) {
                    const url = new URL(window.location.href);
                    url.searchParams.append('ReferncePk', value);
                    window.location.href = url;
                }
            }
        });


    }
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
let StartFunc = ({ inFetchData }) => {
    let LocalinFetchData = inFetchData;
    let jVarLocalFromDashBoard = getUrlQueryParams({ inGetKey: "FromDashBoard" });


    if (LocalinFetchData.KTF === false) {

        let jVarLocalBranchName = document.getElementById('Mobile');
        jVarLocalBranchName.classList.add("is-invalid");
        document.getElementById("MobileClass").innerHTML = "Duplicate"
        jVarLocalBranchName.focus();
        return;
    };
    if (jVarLocalFromDashBoard) {
        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL("../../../Dashboard/Dashboard.html", url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        window.location.href = new_url.href;
        return;
    };

    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../Show/Show.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
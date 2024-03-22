let StartFunc = ({ inFetchData }) => {
    let LocalinFetchData = inFetchData;

    if (LocalinFetchData.KTF === false) {
        jFLocalSuccessFalse();
    } else {
        jFLocalSuccessTrue();
    }
};

let jFLocalSuccessTrue = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../ShowAll/ShowAll.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

let jFLocalSuccessFalse = () => {
    let jVarLocalBranchName = document.getElementById('ItemName');
    jVarLocalBranchName.classList.add("is-invalid");
    document.getElementById("ItemnameinvalidId").innerHTML = "Duplicate"
    jVarLocalBranchName.focus();
    return;
};

export { StartFunc }
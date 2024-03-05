let StartFunc = ({ inFetchData }) => {
    let LocalinFetchData = inFetchData;

    if (LocalinFetchData.KTF === false) {

        let jVarLocalBranchName = document.getElementById('Mobile');
        jVarLocalBranchName.classList.add("is-invalid");
        document.getElementById("MobileClass").innerHTML = "Duplicate"
        jVarLocalBranchName.focus();
        return;
    } else {

        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL("../Show/Show.html", url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        window.location.href = new_url.href;
    };
};

export { StartFunc }
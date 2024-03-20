let StartFunc = ({ inFetchData }) => {
    let LocalinFetchData = inFetchData;
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });


    if (LocalinFetchData === false) {

        let jVarLocalBranchName = document.getElementById('ItemName');
        jVarLocalBranchName.classList.add("is-invalid");
        document.getElementById("ItemnameinvalidId").innerHTML = "Duplicate"
        jVarLocalBranchName.focus();
        return;
    } else {

        Swal.fire({
            icon: "success",
            title: "Updated Successfully",
            confirmButtonText: "Ok",
        }).then((result) => {
            if (result.isConfirmed || result.dismiss) {
                const url = new URL(window.location.href);
                let NewURl = new URL("../ShowAll/ShowAll.html", url);
                const new_url = new URL(`${NewURl.href}`);
                // new_url.searchParams.append('BranchName', jVarLocalBranchName);

                window.location.href = new_url.href;
            };
        });

    }
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

// {
//     isConfirmed
//     :
//     true
//     isDenied
//     :
//     false
//     isDismissed
//     :
//     false
//     value
//     :
//     true
// }



export { StartFunc }
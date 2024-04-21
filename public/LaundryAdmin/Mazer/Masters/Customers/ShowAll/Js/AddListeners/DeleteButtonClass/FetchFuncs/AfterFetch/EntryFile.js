const StartFunc = ({ inFromFetch }) => {
    if (inFromFetch) {
        Swal.fire({
            icon: "success",
            title: "Deleted sucesufully",
            confirmButtonText: "ok",
        }).then((result) => {
            if (result.isConfirmed || result.dismiss) {
                LocalRefreshBSTableIdFunc();

            }
        });


    };
};

let LocalRefreshBSTableIdFunc = async () => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();

};



export { StartFunc };
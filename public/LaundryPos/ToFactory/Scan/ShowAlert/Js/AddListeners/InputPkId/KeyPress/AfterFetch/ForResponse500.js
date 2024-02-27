let StartFunc = async ({ inFetchResonse }) => {
    let jVarLocalResponseData = inFetchResonse;

    if (jVarLocalResponseData.KReason == "No Data") {
        Swal.fire({
            icon: "warning",
            title: "No data found",
            text: `${jVarLocalResponseData.KReason}`
        });

    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: `${jVarLocalResponseData.KReason}`
        });

        return;
    };
};

export { StartFunc };
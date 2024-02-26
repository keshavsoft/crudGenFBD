let StartFunc = async ({ inFetchResonse }) => {
    let jVarLocalResponseData = inFetchResonse;

    Swal.fire({
        icon: "error",
        title: "Error",
        text: `${jVarLocalResponseData.KReason}`
    });

    return;
};

export { StartFunc };
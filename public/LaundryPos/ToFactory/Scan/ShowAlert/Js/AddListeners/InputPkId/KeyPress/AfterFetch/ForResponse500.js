let StartFunc = async ({ inFetchResonse }) => {
    let jVarLocalResponseData = await inFetchResonse.text();

    Swal.fire({
        icon: "error",
        title: "Error",
        text: `${jVarLocalResponseData}`
    });

    return;
};

export { StartFunc };
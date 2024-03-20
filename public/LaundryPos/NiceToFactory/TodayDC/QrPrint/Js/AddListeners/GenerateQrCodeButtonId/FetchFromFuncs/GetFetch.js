let StartFunc = async ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalvoucherRef = jVarLocalCurrentTarget.dataset.pk;

    let jVarLocalFetchUrl = `/bin/Factory/VoucherDetails/RowData/pk/${jVarLocalvoucherRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();

    return await response;
};

export { StartFunc };
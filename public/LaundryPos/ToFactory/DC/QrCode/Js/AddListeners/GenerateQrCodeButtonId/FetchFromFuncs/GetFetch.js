let StartFunc = async ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalvoucherRef = jVarLocalCurrentTarget.dataset.voucherref;

    let jVarLocalFetchUrl = `/bin/Factory/VoucherDetails/RowData/${jVarLocalvoucherRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
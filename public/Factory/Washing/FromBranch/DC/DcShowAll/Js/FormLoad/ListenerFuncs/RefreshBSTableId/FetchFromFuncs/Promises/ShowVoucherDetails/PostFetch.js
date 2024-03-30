let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Factory/VoucherDetails`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
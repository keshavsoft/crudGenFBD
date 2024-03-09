let StartFunc = async ({ inCustomerName, inCustomerMobile }) => {
    let jVarLocalFetchUrl = `/bin/Masters/CustomerNames/WithKeysCheck`;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };
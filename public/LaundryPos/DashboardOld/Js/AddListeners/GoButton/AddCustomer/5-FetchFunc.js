let StartFunc = async ({ inCustomerName, inCustomerMobile }) => {
    let jVarLocalBodyData = { CustomerName: inCustomerName, Mobile: inCustomerMobile };

    let jVarLocalFetchUrl = `/bin/Masters/CustomerNames/WithKeysCheck`;

    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    
    return await response;
};

export { StartFunc };
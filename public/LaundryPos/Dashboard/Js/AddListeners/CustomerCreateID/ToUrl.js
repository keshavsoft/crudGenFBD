let StartFunc = () => {
    let jVarLocalToUrl = `../Masters/CustomersDashboard/Create/Create.html`;
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    params1.append("FromDashBoard", true);

    const myUrlWithParams = new URL(`${jVarLocalToUrl}?${params1}`, document.baseURI);
    window.location.href = myUrlWithParams.href;
};

export { StartFunc };
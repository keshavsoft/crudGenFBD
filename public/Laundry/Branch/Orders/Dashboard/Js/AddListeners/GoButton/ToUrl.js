let StartFunc = ({ inCustomerName, inCustomerMobile }) => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalToUrl = `../NewOrder/NewOrder.html`;
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);

    params1.append("CustomerName", inCustomerName);
    params1.append("CustomerMobile", inCustomerMobile);
    params1.append("BranchName", jVarLocalBranchName);
    
    Swal.fire("New Customer creat--");

    const myUrlWithParams = new URL(`${jVarLocalToUrl}?${params1}`, document.baseURI);
    window.location.href = myUrlWithParams.href;
};

export { StartFunc };
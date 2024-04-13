const StartFunc = () => {
    let jVarLocalCustomersFromLocslstroge = localStorage.getItem("CustomerNames");
    let LocaCustomerData = JSON.parse(jVarLocalCustomersFromLocslstroge);
    let jVatLocalCustomersDataListId = document.getElementById("CustomersDataListId")

    LocaCustomerData.forEach(element => {
        let LocalOption = document.createElement("option");
        LocalOption.value = `${element.CustomerName}:${element.Mobile}`
        LocalOption.innerHTML = `${element.CustomerName}:${element.Mobile}`
        jVatLocalCustomersDataListId.appendChild(LocalOption)

    });
};
export { StartFunc };
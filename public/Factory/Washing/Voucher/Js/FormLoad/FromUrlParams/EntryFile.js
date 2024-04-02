let StartFunc = () => {
    // let jVarLocalFactoryName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalFactoryName = localStorage.getItem("FactoryName");

    if (jVarLocalFactoryName === null) {
        Swal.fire({
            title: "BranchName!",
            text: "Not found in URL!",
            icon: "error"
        });
    };

    jFShowFactoryNameId({ inValue: jVarLocalFactoryName })
    jFShowDeliveryDateTime();
    jFShowFactory({ inValue: jVarLocalFactoryName })
};

const jFShowFactoryNameId = ({ inValue }) => {
    let jVarLocalHtmlId = "FactoryNameId";
    let jVarLocalMenItemsTabId = document.getElementById(jVarLocalHtmlId);
    jVarLocalMenItemsTabId.innerHTML = inValue;
};

const jFShowDeliveryDateTime = () => {
    let jVarLocalHtmlId = "Date";
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().slice(0, 10);

    let jVarLocalMenItemsTabId = document.getElementById(jVarLocalHtmlId);
    jVarLocalMenItemsTabId.value = formattedDate;
};

const jFShowFactory = ({ inValue }) => {
    let jVarLocalHtmlId = "Factory";
    let jVarLocalMenItemsTabId = document.getElementById(jVarLocalHtmlId);
    jVarLocalMenItemsTabId.value = inValue;
};

export { StartFunc }
let StartFunc = async () => {
    jVarLocalBranchName();
    jFShowDeliveryDateTime();
};

let jVarLocalBranchName = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarBranchName = document.getElementById('BranchName');

    if (jVarBranchName === null === false) {
        return jVarBranchName.value = jVarLocalBranchName;
    };
};

const jFShowDeliveryDateTime = () => {
    let jVarLocalHtmlId = "Date";
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().slice(0, 10);

    let jVarLocalMenItemsTabId = document.getElementById(jVarLocalHtmlId);
    jVarLocalMenItemsTabId.value = formattedDate;
};

export { StartFunc };
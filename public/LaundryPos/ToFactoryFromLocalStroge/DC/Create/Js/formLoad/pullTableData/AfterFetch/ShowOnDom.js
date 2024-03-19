const StartFunc = ({ inFromFetch }) => {
    let LocalinFromFetch = inFromFetch;
    let LocalMax = (Math.max(... (LocalinFromFetch.map(e => e.pk)), 0)) + 1
    jFLocalToInputJobId({ inJobId: LocalMax });
    jVarLocalBranchName();
    jFShowDeliveryDateTime();
};


let jFLocalToInputJobId = ({ inJobId }) => {
    let jVarLocalHtmlId = 'VoucherNumber';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};

let jVarLocalBranchName = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarBranchName = document.getElementById('BranchName');

    if (jVarBranchName === null === false) {
        return jVarBranchName.value = jVarLocalBranchName;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

const jFShowDeliveryDateTime = () => {
    let jVarLocalHtmlId = "Date";
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().slice(0, 10);

    let jVarLocalMenItemsTabId = document.getElementById(jVarLocalHtmlId);
    jVarLocalMenItemsTabId.value = formattedDate;
};
export { StartFunc };
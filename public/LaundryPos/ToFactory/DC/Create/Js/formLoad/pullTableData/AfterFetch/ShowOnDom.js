const StartFunc = ({ inFromFetch }) => {
    let LocalinFromFetch = inFromFetch;
    let LocalMax = (Math.max(... (LocalinFromFetch.map(e => e.pk)), 0)) + 1
    jFLocalToInputJobId({ inJobId: LocalMax });
    jVarLocalBranchName();
};


let jFLocalToInputJobId = ({ inJobId }) => {
    let jVarLocalHtmlId = 'VoucherNumber';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};

let jVarLocalBranchName = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
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

export { StartFunc };
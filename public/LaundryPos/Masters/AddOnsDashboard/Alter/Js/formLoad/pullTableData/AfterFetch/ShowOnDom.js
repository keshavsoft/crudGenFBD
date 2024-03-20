const StartFunc = ({ inFromFetch }) => {
    let LocalinFromFetch = inFromFetch;
    jFLocalToInputCustomerName({ inJobId: LocalinFromFetch.AddOnService });
    jFLocalToInputMobile({ inJobId: LocalinFromFetch.AddOnRate });
};

let jFLocalToInputCustomerName = ({ inJobId }) => {
    let jVarLocalHtmlId = 'AddOnService';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};

let jFLocalToInputMobile = ({ inJobId }) => {
    let jVarLocalHtmlId = 'AddOnRate';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};




export { StartFunc };
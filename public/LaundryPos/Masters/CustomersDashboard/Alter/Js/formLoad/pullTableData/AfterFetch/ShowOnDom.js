const StartFunc = ({ inFromFetch }) => {
    let LocalinFromFetch = inFromFetch;
    jFLocalToInputCustomerName({ inJobId: LocalinFromFetch.CustomerName });
    jFLocalToInputMobile({ inJobId: LocalinFromFetch.Mobile });
    jFLocalToInputCity({ inJobId: LocalinFromFetch.City });
};

let jFLocalToInputCustomerName = ({ inJobId }) => {
    let jVarLocalHtmlId = 'CustomerName';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};

let jFLocalToInputMobile = ({ inJobId }) => {
    let jVarLocalHtmlId = 'Mobile';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};

let jFLocalToInputCity = ({ inJobId }) => {
    let jVarLocalHtmlId = 'City';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};




export { StartFunc };
const StartFunc = ({ inFromFetch }) => {
    let LocalinFromFetch = inFromFetch;
    jFLocalToInputCategory({ inJobId: LocalinFromFetch.Category });
    jFLocalToInputItemName({ inJobId: LocalinFromFetch.ItemName });
    jFLocalToInputDryWashRate({ inJobId: LocalinFromFetch.DryWashRate });
    jFLocalToInputDryPcs({ inJobId: LocalinFromFetch.Pcs });
};

let jFLocalToInputCategory = ({ inJobId }) => {
    let jVarLocalHtmlId = 'Category';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};

let jFLocalToInputItemName = ({ inJobId }) => {
    let jVarLocalHtmlId = 'ItemName';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};


let jFLocalToInputDryWashRate = ({ inJobId }) => {
    let jVarLocalHtmlId = 'DryWashRate';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};

let jFLocalToInputDryPcs = ({ inJobId }) => {
    let jVarLocalHtmlId = 'Pcs';
    let jVarLocalJobId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalJobId === null === false) {
        jVarLocalJobId.value = inJobId;
    };
};


export { StartFunc };
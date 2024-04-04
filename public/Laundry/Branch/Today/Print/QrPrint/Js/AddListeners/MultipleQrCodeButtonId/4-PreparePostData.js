
const StartFunc = ({inCurrentTarget}) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;

    return jVarLocalRowPk;
};

export { StartFunc };
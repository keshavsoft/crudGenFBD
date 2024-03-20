const StartFunc = ({jVarLocalCurrentTarget}) => {
    let jVarLocalBodyData = {};
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;

    jVarLocalBodyData.inRowPk = jVarLocalRowPk;
    return jVarLocalBodyData;
};

export { StartFunc };
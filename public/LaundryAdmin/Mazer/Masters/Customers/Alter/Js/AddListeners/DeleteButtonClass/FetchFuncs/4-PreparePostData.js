const StartFunc = ({jVarLocalCurrentTarget}) => {
    let jVarLocalBodyData = {};
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
    let jVarLocalbranchname = jVarLocalCurrentTarget.dataset.branchname;

    jVarLocalBodyData.inRowPk = jVarLocalRowPk;
    jVarLocalBodyData.Branchname = jVarLocalbranchname;
    return jVarLocalBodyData;
};

export { StartFunc };
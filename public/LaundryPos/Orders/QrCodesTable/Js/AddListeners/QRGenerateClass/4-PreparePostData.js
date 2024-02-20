const StartFunc = ({jVarLocalCurrentTarget}) => {
    let jVarLocalBodyData = {};
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
    let jVarLocalBranchName = jVarLocalCurrentTarget.dataset.branchname;
    jVarLocalBodyData.inRowPk = jVarLocalRowPk;
    jVarLocalBodyData.BranchName = jVarLocalBranchName;
    return jVarLocalBodyData;
};

export { StartFunc };
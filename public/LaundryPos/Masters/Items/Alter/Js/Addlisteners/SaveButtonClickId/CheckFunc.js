let StartFunc = () => {
    if ((jFFactory()) === false) {
        return false;
    };

    if ((jFItemName()) === false) {
        return false;
    };

    if ((jFDryWashRate()) === false) {
        return false;
    };
    return true;
};

const jFFactory = () => {
    let jVarLocalFactory = document.getElementById('Category');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    };

    if ((jVarLocalFactory.value === "") === false) {
        jVarLocalFactory.classList.remove("is-invalid");
        return true;
    };
    return true;
};

const jFItemName = () => {
    let jVarLocalBranchName = document.getElementById('ItemName');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value === "") === false) {
        jVarLocalBranchName.classList.remove("is-invalid");
        return true;
    };
    
    return true;
};

const jFDryWashRate = () => {
    let jVarLocalBranchName = document.getElementById('DryWashRate');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value === "") === false) {
        jVarLocalBranchName.classList.remove("is-invalid");
        return true;
    };
    
    return true;
};

export { StartFunc }
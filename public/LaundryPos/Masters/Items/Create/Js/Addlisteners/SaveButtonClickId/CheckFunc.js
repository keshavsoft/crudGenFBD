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
        return false;
    };
    return true;
};

const jFItemName = () => {
    let jVarLocalBranchName = document.getElementById('ItemName');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        return false;
    };
    
    return true;
};

const jFDryWashRate = () => {
    let jVarLocalBranchName = document.getElementById('DryWashRate');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        return false;
    };
    
    return true;
};

export { StartFunc }
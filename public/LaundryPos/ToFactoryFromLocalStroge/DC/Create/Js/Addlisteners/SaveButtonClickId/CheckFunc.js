let StartFunc = () => {
    if ((jFFactory()) === false) {
        return false;
    };

    if ((jFBranchName()) === false) {
        return false;
    };
    return true;
};

const jFFactory = () => {
    let jVarLocalFactory = document.getElementById('Factory');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        return false;
    };
    return true;
};

const jFBranchName = () => {
    let jVarLocalBranchName = document.getElementById('BranchName');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        return false;
    };
    return true;
};

export { StartFunc }
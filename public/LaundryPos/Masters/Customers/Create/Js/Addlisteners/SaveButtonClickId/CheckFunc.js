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
    let jVarLocalFactory = document.getElementById('CustomerName');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        return false;
    };
    return true;
};

const jFBranchName = () => {
    let jVarLocalBranchName = document.getElementById('Mobile');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        return false;
    };
    if ((jVarLocalBranchName.value.length === 10) === false) {
        document.getElementById("MobileClass").innerHTML = "must be 10"
        jVarLocalBranchName.classList.add("is-invalid");
        return false;
    };
    return true;
};

export { StartFunc }
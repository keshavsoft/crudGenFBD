let StartFunc = () => {
    if ((jFAddOnItemId()) === false) {
        return false;
    };

    if ((jFAddOnServiceId()) === false) {
        return false;
    };

    if ((jFAddOnRateId()) === false) {
        return false;
    };
    return true;
};

const jFAddOnItemId = () => {
    let jVarLocalFactory = document.getElementById('AddOnItemId');

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
const jFAddOnServiceId = () => {
    let jVarLocalFactory = document.getElementById('AddOnServiceId');

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

const jFAddOnRateId = () => {
    let jVarLocalBranchName = document.getElementById('AddOnRateId');

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

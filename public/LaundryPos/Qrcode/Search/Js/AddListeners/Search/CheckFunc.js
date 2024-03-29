let StartFunc = () => {
    if ((jFSearch()) === false) {
        return false;
    };
};



const jFSearch = () => {
    let jVarLocalBranchName = document.getElementById('Search');

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
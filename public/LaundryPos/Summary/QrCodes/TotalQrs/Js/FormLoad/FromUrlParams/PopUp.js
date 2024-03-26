let StartFunc = () => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ title: "No Brach in localStorage", icon: "error" });
};

export { StartFunc }
let StartFunc = () => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ icon: "error", text: "No Branch on Params" });
};



export { StartFunc }
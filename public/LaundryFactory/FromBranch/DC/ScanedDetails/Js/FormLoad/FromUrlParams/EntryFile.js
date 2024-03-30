let StartFunc = () => {
  let jVarLocalFactoryName = localStorage.getItem("FactoryName");

  if (jVarLocalFactoryName === "" || jVarLocalFactoryName === null) swal.fire({ title: "No FactoryName in localStorage", icon: "error" })

  let jVarLocalBranchId = 'FactoryNameId';
  let jVarlocalBranch = document.getElementById(jVarLocalBranchId);

  if (jVarlocalBranch === null === false) {
    jVarlocalBranch.innerHTML = jVarLocalFactoryName;
  };

};


export { StartFunc }
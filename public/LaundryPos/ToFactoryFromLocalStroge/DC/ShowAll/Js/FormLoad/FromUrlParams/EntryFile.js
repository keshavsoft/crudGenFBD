// import { StartFunc as StartFuncFromSave } from "./FromSave/ChangeRowColour/EntryFile.js";

let StartFunc = () => {
  let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });
  let jVarLocalSavedPk = getUrlQueryParams({ inGetKey: "SavedPk" });
  // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
  let jVarLocalBranchName = localStorage.getItem("BranchName");

  if (jVarLocalFromSave) {
    //  StartFuncFromSave({ inRowPk: jVarLocalSavedPk });
  };
  if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ title: "No Branch Name in params", icon: "error" })

  let jVarLocalBranchId = 'BranchNameId';
  let jVarlocalBranch = document.getElementById(jVarLocalBranchId);

  if (jVarlocalBranch === null === false) {
    jVarlocalBranch.innerHTML = jVarLocalBranchName;
  };

}


let getUrlQueryParams = ({ inGetKey }) => {
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const value = parameters.get(inGetKey);
  return value;
};

export { StartFunc }
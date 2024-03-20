// import { StartFunc as StartFuncFromSave } from "./FromSave/ChangeRowColour/EntryFile.js";

let StartFunc = () => {
  let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });
  let jVarLocalSavedPk = getUrlQueryParams({ inGetKey: "SavedPk" });
  LocalFuncForBranchNameId();
  if (jVarLocalFromSave) {
    //  StartFuncFromSave({ inRowPk: jVarLocalSavedPk });
  };
};

let LocalFuncForBranchNameId = () => {
  // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
  let jVarLocalBranchName = localStorage.getItem("BranchName");

  let jVarLocalBranchNameId = document.getElementById('BranchNameId');

  if (jVarLocalBranchNameId === null === false) {
    jVarLocalBranchNameId.innerHTML = jVarLocalBranchName
  };
};

let getUrlQueryParams = ({ inGetKey }) => {
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const value = parameters.get(inGetKey);
  return value;
};

export { StartFunc }
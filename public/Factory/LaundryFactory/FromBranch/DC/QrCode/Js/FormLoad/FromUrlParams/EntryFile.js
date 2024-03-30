import { StartFunc as StartFuncPopUp } from "./PopUp.js";

let StartFunc = () => {
  StartFuncPopUp();
  let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });
  let jVarLocalSavedPk = getUrlQueryParams({ inGetKey: "SavedPk" });
  let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

  if (jVarLocalFromSave) {
    //  StartFuncFromSave({ inRowPk: jVarLocalSavedPk });
  };

  let jVarLocalBranchId = 'BranchNameId';
  let jVarlocalBranch = document.getElementById(jVarLocalBranchId);

  if (jVarlocalBranch === null === false) {
    jVarlocalBranch.innerHTML = jVarLocalBranchName;
  };

};

let getUrlQueryParams = ({ inGetKey }) => {
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const value = parameters.get(inGetKey);
  return value;
};

export { StartFunc }
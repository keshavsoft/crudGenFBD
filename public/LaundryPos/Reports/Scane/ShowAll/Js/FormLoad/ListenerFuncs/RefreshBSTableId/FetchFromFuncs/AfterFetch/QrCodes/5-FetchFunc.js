let StartFunc = async () => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = `/bin/Factory/QrCodeDetails/FilterData/BranchName/${jVarLocalBranchName}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
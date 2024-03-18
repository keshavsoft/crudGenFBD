
let StartFunc = async () => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();
    // let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    // if (jVarLocalDataNeeded !== null) {
    //     if (jVarLocalDataNeeded.KTF) {

    //         StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
    //     };
    // };
};

export { StartFunc }
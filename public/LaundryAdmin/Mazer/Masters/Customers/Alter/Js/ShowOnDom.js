let StartFunc = () => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalRefreshBSTableId === null) {
        console.log("RefreshBSTableId : id is not found in DOM...");
        return
    };

    jVarLocalRefreshBSTableId.click();
};

export { StartFunc }
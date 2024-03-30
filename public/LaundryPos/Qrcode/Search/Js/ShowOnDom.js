let StartFunc = async () => {
    await LocalQrRefreshButtonId();
    await LocalRefreshBSTableId();
    await LocalFactoryScanId();
};

const LocalQrRefreshButtonId = async () => {
    let jVarLocalHtmlId = 'QrRefreshButtonId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();

};
const LocalRefreshBSTableId = async () => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();

};

const LocalFactoryScanId = async () => {
    let jVarLocalHtmlId = 'FactoryScanId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();

};

export { StartFunc }
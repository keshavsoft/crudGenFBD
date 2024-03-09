import { StartFunc as StartFuncRowpk } from "./InputRowData.js";

const StartFunc = () => {
    let jVarLocalRowPk = StartFuncRowpk();
    // console.log("jVarLocalRowPk:", jVarLocalRowPk);

    jFLocalToURL({ inRowPk: jVarLocalRowPk });
};
let jFLocalToURL = ({ inRowPk }) => {

    let LocalinRowPk = inRowPk;
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../FromBranch/Scan/BSTableFilterFromVoucher/BSTableFilterFromVoucher.html", url);
    NewURl.searchParams.set('VoucherRef', LocalinRowPk);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;

};

export { StartFunc };
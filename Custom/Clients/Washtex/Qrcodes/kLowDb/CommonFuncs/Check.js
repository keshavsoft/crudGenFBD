import { StartFunc as StartFuncCommonFuncs } from '../../../../../../bin/QrCodes/Generate/kLowDb/CommonFuncs/ReturnDbObject.js';

const StartFunc = ({ inTable, inId }) => {
    let LocalTable = inTable;
    let LocalId = inId;

    let LocalReturnData = { KTF: false };
    const db = StartFuncCommonFuncs();
    db.read();

    let FilterBranchData = db.data.filter(e => e.BookingData.OrderData.BranchName == LocalTable);

    if (FilterBranchData.length == 0) {
        LocalReturnData.KTF = true;
        return LocalReturnData;
    };
    let LocalRowNeeded = FilterBranchData.find(e => e.OrderNumber == LocalId);

    if (LocalRowNeeded == undefined) {
        LocalReturnData.KTF = true;
        return LocalReturnData;
    };
    return LocalReturnData;

};
export { StartFunc };
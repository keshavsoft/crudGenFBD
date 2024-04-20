import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false };
    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();

    if (db.data.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    let maxRow;
    let maxPk = -Infinity;

    for (const row of db.data) {
        if (row.pk > maxPk) {
            maxPk = row.pk;
            maxRow = row;
        }
    };

    LocalReturnData.JsonData = maxRow;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };
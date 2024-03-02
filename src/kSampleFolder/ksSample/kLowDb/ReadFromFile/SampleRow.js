import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';
import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../CommonFuncs/ReturnDbObjectWithSchema.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false };
    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();

    if (db.data.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    LocalReturnData.RowCount = db.data.length;
    LocalReturnData.KTF = true;

    let LocalFromCommon = StartFuncReturnDbObjectWithSchema();

    return LocalFromCommon.TableSchema.fileData;

    return LocalReturnData;
};

export { StartFunc };
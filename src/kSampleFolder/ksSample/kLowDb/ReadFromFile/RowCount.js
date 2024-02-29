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

    LocalReturnData.RowCount = db.data.length;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };
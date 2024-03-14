import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inFindValue, inFindKey }) => {
    let LocalFindKey = inFindKey;
    let LocalFindValue = inFindValue;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();

    let LocalFilterData = db.data.filter(e => {
        return eval(LocalFindKey) == LocalFindValue
    });

    if (LocalFilterData.length === 0) {
        LocalReturnData.KReason = "No Data";
        return LocalReturnData;
    };

    return LocalFilterData;
};

export { StartFunc };

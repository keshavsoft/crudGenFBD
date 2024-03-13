import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inKey, inValue }) => {
    let LocalinKey = inKey;
    let LocalValue = inValue;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();
    let LocalRowNeeded = db.data.filter(e => e[LocalinKey] == LocalValue);

    if (LocalRowNeeded.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    LocalReturnData.JsonData = LocalRowNeeded;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };
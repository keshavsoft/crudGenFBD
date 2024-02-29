import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inKey, inId }) => {
    let LocalinKey = inKey;
    let LocalId = inId;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();
    let LocalRowNeeded = db.data.find(e => e[LocalinKey] == LocalId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    LocalReturnData.JsonData = LocalRowNeeded;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };
import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();

    if (LocalFuncCheckMaxPk({ inData: db.data, inPk: parseInt(LocalId) }) === false) {
        LocalReturnData.KReason = "This is the Max Pk...";
        return LocalReturnData;
    };

    let LocalRowNeeded = db.data.find(e => e.pk == LocalId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    LocalReturnData.JsonData = LocalRowNeeded;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

let LocalFuncCheckMaxPk = ({ inData, inPk }) => {
    let LocalData = inData;

    let LocalPkArray = LocalData.map(e => e.pk);

    let numberArray = LocalPkArray.map(Number);

    let MaxPk = Math.max(...numberArray, 0);

    if (MaxPk === inPk) {
        return false;
    };

    return true;
};

export { StartFunc };
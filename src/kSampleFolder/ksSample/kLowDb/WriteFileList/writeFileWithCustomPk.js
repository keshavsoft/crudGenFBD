import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs()

    db.read();
    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    let LocalDataWithUuid = LocalFuncGeneratePk({ inDataToInsert: LocalinDataToInsert, inData: db.data });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.Json);
    let LocalFromWrite = db.write();

    LocalReturnData.KTF = true;

    return LocalDataWithUuid;
};

const LocalFuncGeneratePk = ({ inDataToInsert, inData }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalCustomPk = inDataToInsert.pk;
    let LocalInData = inData;

    let LocalArrayPk = LocalInData.map(element => element.pk);
    const isEqualToKey = LocalArrayPk.some(element => element == LocalCustomPk);

    if (isEqualToKey) {
        LocalReturnData.KReason = "Pk Already found !"
        return LocalReturnData
    };

    LocalReturnData.Json = { ...inDataToInsert, pk: LocalCustomPk, DateTime: Timestamp() };
    LocalReturnData.KTF = true;
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();

    return formattedDate;
};



export { StartFunc };

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

    let LocalDataWithUuid = LocalFuncGeneratePk({ inDataToInsert: LocalinDataToInsert, inData: db.data });

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid);
    let LocalFromWrite = db.write();
    LocalReturnData.KTF = true;

    return LocalDataWithUuid.UuId;
};

const LocalFuncGeneratePk = ({ inDataToInsert, inData }) => {
    let LocalInData = inData;
    let LocalArrayPk = LocalInData.map(element => element.pk);


    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);

    let LocalReturnData = { ...inDataToInsert, UuId: MaxPk, pk: MaxPk, DateTime: LocalFuncCurrentDateTime() };
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

let LocalFuncCurrentDateTime = () => {
    let jVarLocalAddDays7 = new Date();
    let date = new Date(jVarLocalAddDays7);

    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    // let HH = date.getHours();

    let HH = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let mm = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let ss = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    return `${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`;
};

export { StartFunc };

import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as StartFuncChecks } from "./Checks/QrCheck.js";
import { StartFunc as StartFuncChecksQrCodeId } from "./Checks/QrCodeId.js";

let StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalStartFuncPullData = StartFuncPullData();

    if (LocalStartFuncPullData === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };

    const LocalTableSchema = LocalStartFuncPullData.inTableSchema;
    const db = LocalStartFuncPullData.inDb;
    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema.fileData) {
        if ("references" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };

    let LocalKeyNeeded = Object.keys(LocalKeysNeeded)[0];
    let LocalValueNeeded = inDataToInsert[LocalKeyNeeded];

    let LocalK1 = Object.values(LocalKeysNeeded)[0].references;
    let LocalDataNeeded = StartFuncChecks({ inFileName: LocalK1.model.tableName,inFolderName:LocalK1.folderName, NeededKey: LocalValueNeeded });

    if (LocalDataNeeded.KTF === false) {
        LocalReturnData.KReason = LocalDataNeeded.KReason;
        return LocalReturnData;
    };

    let LocalStartFuncChecksQrCodeId = StartFuncChecksQrCodeId({ inData: db.data, inDataToInsert: LocalinDataToInsert, });
    if (LocalStartFuncChecksQrCodeId.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncChecksQrCodeId.KReason;
        return LocalReturnData;
    };

    let LocalDataWithUuid = LocalFuncGeneratePk({
        inDataToInsert: LocalinDataToInsert,
        inData: db.data
    });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.InsertData);
    let LocalFromWrite = db.write();

    LocalReturnData.KTF = true;
    LocalReturnData.ScanNo = LocalDataWithUuid.InsertData.QrCodeId
    return LocalReturnData;
};

const LocalFuncGeneratePk = ({ inDataToInsert, inData }) => {
    let LocalInData = inData;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalArrayPk = LocalInData.map(element => element.pk);

    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);

    LocalReturnData.InsertData = { ...inDataToInsert, UuId: MaxPk, pk: MaxPk, DateTime: Timestamp() };
    LocalReturnData.KTF = true;
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

export { StartFunc };
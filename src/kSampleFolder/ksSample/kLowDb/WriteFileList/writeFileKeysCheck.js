import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';

import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../CommonFuncs/ReturnDbObjectWithSchema.js';
import Configjson from '../../../../Config.json' assert {type: 'json'};
// import countryTable from '../../../FolderName.json' assert {type: 'json'};

let LocalFuncPullData = ({ inFileName }) => {
    let LocalFolderName = "QrCodes";

    let LocalFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${LocalFolderName}/${inFileName}.json`;

    const defaultData = { error: "From local" }

    const db = new LowSync(new JSONFileSync(LocalFilePath), defaultData);
    db.read();
    return db.data;
};

let StartFunc = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const dbFromDbObjectWithSchema = StartFuncReturnDbObjectWithSchema();

    const db = dbFromDbObjectWithSchema.dbObject;

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    return LocalFuncStartInsert({
        inDb: db,
        inTableSchema: dbFromDbObjectWithSchema.TableSchema,
        inDataToInsert: LocalinDataToInsert
    });
};

let StartFunc_24Feb2024 = ({ inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const dbFromDbObjectWithSchema = StartFuncReturnDbObjectWithSchema()
    const db = dbFromDbObjectWithSchema.dbObject;

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

let LocalFuncStartInsert = ({ inDb, inTableSchema, inDataToInsert }) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const LocalTableSchema = inTableSchema;
    const db = inDb;
    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema.fileData) {
        if ("references" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };

    let LocalKeyNeeded = Object.keys(LocalKeysNeeded)[0];
    let LocalValueNeeded = inDataToInsert[LocalKeyNeeded];

    let LocalK1 = Object.values(LocalKeysNeeded)[0].references;
    let LocalDataNeeded = LocalFuncPullData({ inFileName: LocalK1.model.tableName });

    let LocalFindValue = LocalDataNeeded.filter(element => {
        return element.pk === LocalValueNeeded;
    });

    if (LocalFindValue.length === 0) {
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

    db.data.push(LocalDataWithUuid);
    let LocalFromWrite = db.write();

    LocalReturnData.KTF = true;

    return LocalDataWithUuid;
};

const LocalFuncGeneratePk = ({ inDataToInsert, inData }) => {
    let LocalInData = inData;
    let LocalArrayPk = LocalInData.map(element => element.pk);

    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);

    let LocalReturnData = { ...inDataToInsert, UuId: MaxPk, pk: MaxPk, DateTime: Timestamp() };
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

export { StartFunc };

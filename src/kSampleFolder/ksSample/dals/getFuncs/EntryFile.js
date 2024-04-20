import { StartFunc as StartFuncreadFile } from '../../kLowDb/ReadFileList/readFile.js';
import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';
import { StartFunc as StartFunReadFileById } from '../../kLowDb/ReadFileList/readFileById.js';
import { StartFunc as StartFuncGetTableSchema } from '../../kLowDb/GetTableSchema/GetColumns.js';
import { StartFunc as StartFuncGetRowCountById } from '../../kLowDb/ReadFromFile/RowCountById.js';
import { StartFunc as StartFuncGetRowCount } from '../../kLowDb/ReadFromFile/RowCount.js';
import { StartFunc as StartFunRowDataByKeyId } from '../../kLowDb/ReadFromFile/RowDataByKeyId.js';
import { StartFunc as StartFuncSampleRow } from '../../kLowDb/ReadFromFile/SampleRow.js';
import { StartFunc as StartFunFilterDataByKeyId } from '../../kLowDb/ReadFromFile/FilterDataByKeyId.js';
import { StartFunc as StartFuncreadSummeryFile } from '../../kLowDb/ReadFileList/readSummeryFile.js';
import { StartFunc as StartFuncMaxRow } from '../../kLowDb/ReadFromFile/MaxRow.js';
import { StartFunc as StartFunReadFileByPk } from '../../kLowDb/ReadFromFile/readFileByPk.js';
import { StartFunc as StartFuncReadFileByPkNonMaxRow } from '../../kLowDb/ReadFromFile/readFileByPkNonMaxRow.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetSummeryFunc = () => {
    return StartFuncreadSummeryFile();
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = StartFuncreadFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetIdFunc = ({ inId }) => {
    let LocalFromLowDb = StartFunReadFileByPk({ inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetRowDataFunc = ({ inKey, inValue }) => {
    return StartFunRowDataByKeyId({ inKey, inValue });

};

let GetRowCountByIdFunc = ({ inKey, inValue }) => {
    return StartFuncGetRowCountById({ inKey, inValue });

};

let GetFilterDataFunc = ({ inKey, inValue }) => {
    return StartFunFilterDataByKeyId({ inKey, inValue });

};

let GetRowCountFunc = () => {
    return StartFuncGetRowCount();
};

let GetFromModalFunc = () => {
    return StartFuncSampleRow();

    // return StartFuncReadFileFromModal();
    // StartFuncSampleRow
};

let GetFromModalUuidFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidAndTSFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetBodyCheckFunc = () => {
    return StartFuncGetTableSchema();
};

let GetMaxRowFunc = () => {
    return StartFuncMaxRow();
};

let GetNonMaxRowFunc = ({ inId }) => {
    let LocalFromLowDb = StartFuncReadFileByPkNonMaxRow({ inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowDataFunc, GetRowCountFunc,
    GetRowCountByIdFunc, GetFilterDataFunc, GetSummeryFunc,
    GetMaxRowFunc, GetNonMaxRowFunc
};
import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';
import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/writeFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from '../../kLowDb/WriteFileList/writeFileFromModal.js';
import { StartFunc as StartFuncImportToFile } from '../../kLowDb/WriteFileList/ImportToFile.js';
import { StartFunc as StartFuncUploadToFile } from '../../kLowDb/WriteFileList/UploadToFile.js';
import { StartFunc as StartFuncwriteFileWithCustomPk } from '../../kLowDb/WriteFileList/writeFileWithCustomPk.js';
// import { StartFunc as StartFuncWriteFileKeysCheck } from '../../kLowDb/WriteFileList/writeFileKeysCheck.js';
import { StartFunc as StartFuncWriteFileKeysCheck } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as StartFuncreadFileUsingLoadAsh } from '../../kLowDb/ReadFileList/readFileUsingLoadAsh.js';
import { StartFunc as StartFuncreadreadFileUsingbyBody } from '../../kLowDb/ReadFileList/readFileUsingbyBody.js';
import { StartFunc as StartFunreadFileSummary } from '../../kLowDb/ReadFileList/readFileSummary.js';
import { StartFunc as StartFuncreadFileWeekSummary } from '../../kLowDb/ReadFileList/readFileWeekSummary.js';


// import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteTofile/';

let PostFunc = ({ inBodyKeys }) => {
    return StartFuncwriteFile({ inDataToInsert: inBodyKeys });
};

let PostCustomPkFunc = ({ inBodyKeys }) => {
    return StartFuncwriteFileWithCustomPk({ inDataToInsert: inBodyKeys });
};

let PostWithKeysCheckFunc = ({ inBodyKeys }) => {
    return StartFuncWriteFileKeysCheck({ inDataToInsert: inBodyKeys });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncWriteFileFromModal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return StartFuncImportToFile({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncUploadToFile({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return StartFuncReadFileFromModal();
};

let GetUsingLoadAshFunc = ({ inId, inFindKey }) => {
    return StartFuncreadFileUsingLoadAsh({ inId, inFindKey });
};

let GetsummaryFunc = ({ inFindKey }) => {
    return StartFunreadFileSummary({ inFindKey });
};

let GetWeeksummaryFunc = ({ inFindKey }) => {
    return StartFuncreadFileWeekSummary({ inFindKey });
};

let FilterDataFrombodyFunc = ({ inFindValue, inFindKey }) => {
    return StartFuncreadreadFileUsingbyBody({ inFindValue, inFindKey });
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc, PostCustomPkFunc,
    PostWithKeysCheckFunc, GetUsingLoadAshFunc, FilterDataFrombodyFunc, GetsummaryFunc,GetWeeksummaryFunc
};
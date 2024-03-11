import { StartFunc as StartFuncUpdateFile } from '../../kLowDb/UpdateFile/UpdateRow.js';
import { StartFunc as StartFuncInsertToSubOfRow } from '../../kLowDb/UpdateFile/InsertToSubOfRow.js';
import { StartFunc as StartFuncUsingLoadAsh } from '../../kLowDb/UpdateFile/UsingLoadAsh.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateFile({ inDataToUpdate, inId });
};

let PutInsertToKeyFunc = ({ inDataToUpdate, inId, inKeyName }) => {
    return StartFuncInsertToSubOfRow({ inDataToUpdate, inId, inKeyName });
};

let PutUpdateUsingLoadAshFunc = ({ inDataToUpdate, inId, inFindKey, inReplaceValue }) => {
    return StartFuncUsingLoadAsh({ inDataToUpdate, inId, inFindKey, inReplaceValue });
};

export {
    PutFunc, PutInsertToKeyFunc, PutUpdateUsingLoadAshFunc
};
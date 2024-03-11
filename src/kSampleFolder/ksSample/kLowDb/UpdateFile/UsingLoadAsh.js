import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';
import _ from "lodash";

let StartFunc = ({ inId, inFindKey, inReplaceValue }) => {
    let LocalFindKey = inFindKey;
    let LocalReplacevalue = inReplaceValue;
    let LocalinId = inId;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();

    let LocalFindRow = db.data.find(element => {
        return element.pk == LocalinId;
    });

    let kk = _.set(LocalFindRow, LocalFindKey, LocalReplacevalue);


    db.write();

    return kk;
};

export { StartFunc };

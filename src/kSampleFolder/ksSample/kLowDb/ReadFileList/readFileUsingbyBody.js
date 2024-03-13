import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';
import _ from "lodash";

let StartFunc = ({ inFindValue, inFindKey }) => {
    let LocalFindKey = inFindKey;
    let LocalFindValue = inFindValue;

    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const db = StartFuncCommonFuncs();
    db.read();

    let LocalFilterData = _.filter(db.data, { LocalFindKey: LocalFindValue, 'active': true });

    // db.write();

    return LocalFilterData;
};

export { StartFunc };

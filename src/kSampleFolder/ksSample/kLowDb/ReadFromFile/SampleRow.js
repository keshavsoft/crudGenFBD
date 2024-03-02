import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../CommonFuncs/ReturnDbObjectWithSchema.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false };
    LocalReturnData.KTF = false;

    let LocalFromCommon = StartFuncReturnDbObjectWithSchema();

    for (const [key, value] of Object.entries(LocalFromCommon.TableSchema.fileData)) {
        LocalFromCommon.TableSchema.fileData[key]="";
    }

    return LocalFromCommon.TableSchema.fileData;
};

export { StartFunc };
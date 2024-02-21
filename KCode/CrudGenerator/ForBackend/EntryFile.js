import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';
import { StartFunc as StartFuncForConfigJson } from './ForConfigJson/EntryFile.js';
import { StartFunc as StartFuncForRestClients } from './ForRestClients/EntryFile.js';
import { StartFunc as StartFuncForkLowDb } from './ForkLowDb/EntryFile.js';
import fs from "fs-extra";

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    LocalFuncCopyFolder({ inTo });

    StartFuncForRoutesFile({ inTablesCollection, inFrom, inTo });
    StartFuncForConfigJson({ inTablesCollection, inFrom, inTo })
    StartFuncForRestClients({ inTablesCollection, inFrom, inTo });
    StartFuncForkLowDb({ inTablesCollection, inFrom, inTo });
};

let LocalFuncCopyFolder = ({ inTo }) => {
    let LocalTo = inTo;

    if (fs.existsSync(LocalTo) === false) {
        fs.mkdirSync(LocalTo);
    };
};

export { StartFunc };
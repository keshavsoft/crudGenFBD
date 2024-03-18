import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";
import { StartFunc as StartFuncForFrontend } from './ForFrontend/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    StartFuncPrepareReadColumnsData({ inTableData: inFilesArray });

    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src/kSampleFolder/ksSample";
    let CommonTo = "bin";

    StartFuncForFrontend({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });
};

export { StartFunc };

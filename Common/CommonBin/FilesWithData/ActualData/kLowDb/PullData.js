import fs from "fs";
import dirTree from "directory-tree";
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = ({ inFolderName }) => {
    let LocalinFolderName = inFolderName;
    let LocalReturnData = { KTF: false }

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}/${LocalinFolderName}`;
    const tree = dirTree(LocalDataPath);

    let LocalJsonData = LocalFuncReadFileData({ inFilesAsArrayData: tree.children });

    if (LocalJsonData.KTF === false) {
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalJsonData.JsonData;
    return LocalReturnData;

};
export { StartFunc };


const jFLocalFunc = ({ inFilesAsArrayData, inFoderPath }) => {
    let LocalFilesAsArrayData = inFilesAsArrayData;
    let LocalReturnData = { KTF: false }
    let LocalArray = [];
    LocalFilesAsArrayData.forEach(filePath => {
        let LocalJsonPath = `${inFoderPath}/${filePath}`
        const data = fs.readFileSync(LocalJsonPath, { encoding: 'utf8', flag: 'r' });
        let JsonParseData = JSON.parse(data);
        let LocalneedData = {};
        LocalneedData.fileName = path.parse(filePath).name;
        LocalneedData.DataCount = JsonParseData.length;
        LocalneedData.LastOrdeDateTime = "";

        if (JsonParseData.length > 0) {
            let LastOrdeDate = JsonParseData[JsonParseData.length - 1];
            LocalneedData.LastOrdeDateTime = LastOrdeDate.DateTime;
        };
        LocalArray.push(LocalneedData)

    });
    // console.log("LocalArray::",LocalArray);
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalArray
    return LocalReturnData;
};
const LocalFuncReadFileData = ({ inFilesAsArrayData }) => {
    let LocalFilesAsArrayData = inFilesAsArrayData;
    let LocalReturnData = { KTF: false }
    let LocalArray = LocalFilesAsArrayData.map(LoopFile => {
        const data = fs.readFileSync(LoopFile.path, { encoding: 'utf8', flag: 'r' });
        let JsonParseData = JSON.parse(data);

        let LoopInsideObject = {};
        LoopInsideObject.FileName = LoopFile.name;
        LoopInsideObject.FileData = JsonParseData;
        return LoopInsideObject;

    });
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalArray
    return LocalReturnData;
};

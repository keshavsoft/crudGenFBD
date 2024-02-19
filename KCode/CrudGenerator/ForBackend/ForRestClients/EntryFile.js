import fs from 'fs';
import path from 'path';

import { StartFunc as StartFuncCommonFuncs } from './CommonFuncs.js';

let StartFunc = ({ inTablesCollection, inTo, inFrom }) => {
    let LocalTypeName = "restClients/crud";
    let LocalTo = inTo;
    let LocalFrom = inFrom;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(LoopFirst => {
        let LocalSecondLevelFiles = LoopFirst.children.filter(element => {
            return "children" in element === false;
        });

        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "get.http",
            inFrom: LocalFrom
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "post.http",
            inFrom: LocalFrom
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "delete.http",
            inFrom: LocalFrom
        });
        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "image.http",
            inFrom: LocalFrom
        });

        StartFuncCommonFuncs({
            inFolderName: LoopFirst.name, inFilesCollection: LocalSecondLevelFiles,
            inTo: LocalTo, inTypeName: LocalTypeName, inFileName: "put.http",
            inFrom: LocalFrom
        });

        LocalFuncForTestEndPoint({
            inFolderName: LoopFirst.name,
            inTablesCollection: LocalSecondLevelFiles,
            inTo, inFrom
        });
    });
};

let LocalFuncForTestEndPoint = ({ inTablesCollection, inTo, inFrom, inFolderName }) => {
    let LocalTypeName = "restClients/testEndPoint";
    let LocalTo = inTo;
    let LocalFrom = inFrom;
    let LocalFolderName = inFolderName;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.filter(element => element.name.endsWith(".json"))

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideFileName = path.parse(element.name).name;
        let LocalFilePath = `${LocalTo}/${LocalFolderName}/${LoopInsideFileName}/${LocalTypeName}`;

        let LoopInsideFiles = fs.readdirSync(LocalFilePath, { withFileTypes: true })
            .filter(item => !item.name.endsWith(".json"))
            .map(item => item.name);


        LoopInsideFiles.forEach(LoopFile => {
            let LocalFileData = fs.readFileSync(`${LocalFilePath}/${LoopFile}`);

            let LocalksSampleReplaced = LocalFileData.toString().replaceAll("ksSample", LoopInsideFileName);
            let LocalkSampleFolderReplaced = LocalksSampleReplaced.toString().replaceAll("kSampleFolder", LocalFolderName);

            let LocalBinReplaced = LocalkSampleFolderReplaced.replaceAll(LocalFrom, LocalTo);

            fs.writeFileSync(`${LocalFilePath}/${LoopFile}`, LocalBinReplaced);
        });



    });
};

export { StartFunc };
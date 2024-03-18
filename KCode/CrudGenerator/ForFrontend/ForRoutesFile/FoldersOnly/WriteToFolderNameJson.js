import fs from "fs-extra";

let StartFunc = ({ inTablesCollection, inTo }) => {
    let LocalTo = inTo;
    let LocalFileName = "FolderName.json";

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(element => {
        let LoopInsideJsonData = {};
        LoopInsideJsonData.folderName = element.name;

        fs.writeFileSync(`${LocalTo}/${element.name}/${LocalFileName}`, JSON.stringify(LoopInsideJsonData));
    });
};

export { StartFunc };

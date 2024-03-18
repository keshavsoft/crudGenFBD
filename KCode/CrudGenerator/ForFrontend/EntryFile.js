import fs from "fs-extra";

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(element => {
        console.log("element : ", element.path);

        fs.createFileSync(`${inTo}/${element.path}/k1.json`, JSON.stringify({}));
    });
};

export { StartFunc };
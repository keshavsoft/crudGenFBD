import dirTree from "directory-tree";
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = ({ inFolderName }) => {
    let LocalinFolderName = inFolderName;

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}/${LocalinFolderName}`;
    const tree = dirTree(LocalDataPath);

    let LocalReturnData = tree.children.map(LoopItem => LoopItem.name);
    return LocalReturnData;

};
export { StartFunc };
// StartFunc({ inFolderName: "Transactions" });

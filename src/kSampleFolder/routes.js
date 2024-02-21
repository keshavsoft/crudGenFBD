import express from 'express';
import dirTree from "directory-tree";
import ConfigJson from '../Config.json' assert {type: 'json'};
import FolderNameJson from './FolderName.json' assert {type: 'json'};

var router = express.Router();

import { router as routerFromksSample } from './ksSample/routes.js';

router.get('/FilesAsArray', (req, res) => {
    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}/${FolderNameJson.folderName}`;
    const tree = dirTree(LocalDataPath);

    res.json(tree.children.map(LoopItem=>LoopItem.name));
});

router.use('/ksSample', routerFromksSample);

export { router };
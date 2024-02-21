import express from 'express';
import dirTree from "directory-tree";
import ConfigJson from './Config.json' assert {type: 'json'};

var router = express.Router();

import { router as routerFromkSampleFolder } from './kSampleFolder/routes.js';

router.get('/FoldersAsArray', (req, res) => {
    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}`;
    const tree = dirTree(LocalDataPath);

    res.json(tree.children.map(LoopItem=>LoopItem.name));
});

router.use('/kSampleFolder', routerFromkSampleFolder);

export { router };
import express from 'express';
var router = express.Router();

import { PostFunc } from '../../controllers/postFuncs/EntryFile.js';

router.get('/:inFolderName', PostFunc);

export { router };
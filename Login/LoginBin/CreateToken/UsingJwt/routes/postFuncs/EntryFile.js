import express from 'express';
var router = express.Router();

import { GetFunc } from '../../controllers/postFuncs/EntryFile.js';

router.get('/:inFolderName', GetFunc);

export { router };
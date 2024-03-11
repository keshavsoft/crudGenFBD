import express from 'express';

var router = express.Router();

import {
    PutFunc, PutInsertToKeyFunc,PutUpdateUsingLoadAshFunc
} from '../../controllers/putFuncs/EntryFile.js';

router.put('/:id', PutFunc);
router.put('/InsertToKey/:id/:inKey', PutInsertToKeyFunc);
router.put('/UsingLoadash/:id', PutUpdateUsingLoadAshFunc);

export { router };
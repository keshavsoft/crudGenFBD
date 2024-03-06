import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';

router.use('/backup', routergetFuncs);

export { router };
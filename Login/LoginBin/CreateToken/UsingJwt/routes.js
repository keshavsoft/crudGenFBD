import express from 'express';

var router = express.Router();

import { router as routerFromgetFuncs } from './routes/postFuncs/EntryFile.js';

router.use('/', routerFromgetFuncs);

export { router };
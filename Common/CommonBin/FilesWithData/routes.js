import express from 'express';

var router = express.Router();

import { router as routerFromActualData } from './ActualData/routes.js';

router.use('/ActualData', routerFromActualData);

export { router };
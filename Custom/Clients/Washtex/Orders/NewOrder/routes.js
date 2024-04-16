import express from 'express';

var router = express.Router();

import { router as routerFromAddItem } from './AddItem/routes.js';

router.use('/AddItem', routerFromAddItem);

export { router };
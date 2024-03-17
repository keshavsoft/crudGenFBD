import express from 'express';

var router = express.Router();

import { router as routerFromCreateToken } from './CreateToken/routes.js';

router.use('/FilesWithData', routerFromCreateToken);

export { router };
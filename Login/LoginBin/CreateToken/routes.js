import express from 'express';

var router = express.Router();

import { router as routerFromUsingJwt } from './UsingJwt/routes';

router.use('/ActualData', routerFromUsingJwt);

export { router };
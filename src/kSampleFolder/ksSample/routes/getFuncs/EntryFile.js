import express from 'express';

var router = express.Router();

import {
    GetFunc, GetDataOnlyFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetFromModalFunc, GetIdFunc, GetBodyCheckFunc, GetRowCountFunc,
    GetRowDataFunc, GetRowCountByIdFunc, GetFilterDataFunc, GetSummeryFunc, GetMaxRowFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/FromModal', GetFromModalFunc);
router.get('/', GetFunc);
router.get('/Summery', GetSummeryFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);
router.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/BodyCheck', GetBodyCheckFunc);
router.get('/RowCount', GetRowCountFunc);
router.get('/RowCount/:inKey/:inValue', GetRowCountByIdFunc);

router.get('/RowData/:inKey/:inValue', GetRowDataFunc);
router.get('/FilterData/:inKey/:inValue', GetFilterDataFunc);
router.get('/MaxRow', GetMaxRowFunc);

router.get('/:id', GetIdFunc);


export { router };
import {
  PutFunc as PutFuncRepo,
  PutInsertToKeyFunc as PutInsertToKeyFuncRepo,
  PutUpdateUsingLoadAshFunc as PutUpdateUsingLoadAshFuncRepo
} from "../../repos/putFuncs/EntryFile.js";

let PutFunc = async (req, res) => {
  // let LocalDataToUpdate = ColumnsPullFunc()(req.body);
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;

  let LocalFromRepo = await PutFuncRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

let PutInsertToKeyFunc = async (req, res) => {
  // let LocalDataToUpdate = ColumnsPullFunc()(req.body);
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;
  let LocalKeyName = req.params.inKey;

  let LocalFromRepo = await PutInsertToKeyFuncRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
    inKeyName: LocalKeyName
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

let PutUpdateUsingLoadAshFunc = async (req, res) => {
  // let LocalDataToUpdate = ColumnsPullFunc()(req.body);
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;
  let LocalBodyFindKey = req.body.FindKey;
  let LocalBodyReplaceValue = req.body.ReplaceValue;

  let LocalFromRepo = await PutUpdateUsingLoadAshFuncRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
    inFindKey: LocalBodyFindKey,
    inReplaceValue: LocalBodyReplaceValue
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

export { PutFunc, PutInsertToKeyFunc, PutUpdateUsingLoadAshFunc };

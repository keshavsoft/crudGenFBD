import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFolderNameFromParam = LocalParams.inFolderName;

    let LocalFromRepo = await GetFuncRepo({ inFolderName: LocalFolderNameFromParam });
    res.json(LocalFromRepo);
};

export { GetFunc };
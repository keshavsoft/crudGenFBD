import { PostFunc as PostFuncRepo } from '../../repos/postFuncs/EntryFile.js';

let PostFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFolderNameFromParam = LocalParams.inFolderName;

    let LocalFromRepo = await PostFuncRepo({ inFolderName: LocalFolderNameFromParam });
    res.json(LocalFromRepo);
};

export { PostFunc };
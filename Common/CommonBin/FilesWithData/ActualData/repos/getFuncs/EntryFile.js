import { GetFunc as GetFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFolderName }) => {
    return GetFuncDal({ inFolderName });
};

export { GetFunc };
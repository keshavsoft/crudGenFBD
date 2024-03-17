import { PostFunc as PostFuncDal } from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inFolderName }) => {
    return PostFuncDal({ inFolderName });
};

export { PostFunc };
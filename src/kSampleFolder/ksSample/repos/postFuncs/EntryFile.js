
import {
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal,
    PostUploadFunc as PostUploadFuncDal, PostGetSelectColumnsFunc as PostGetSelectColumnsFuncDal,
    PostUploadFromModalFunc as PostUploadFromModalFuncDal,
    PostCustomPkFunc as PostCustomPkFuncDal,
    PostWithKeysCheckFunc as PostWithKeysCheckFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = async (inModalObject) => {
    return PostFuncDal({ inBodyKeys: inModalObject });
};

let PostCustompkFunc = async (inModalObject) => {
    return PostCustomPkFuncDal({ inBodyKeys: inModalObject });
};

let PostWithKeysCheckFunc = async (inModalObject) => {
    return PostWithKeysCheckFuncDal({ inBodyKeys: inModalObject });
};

let PostFilterFunc = async (inModalObject) => {
    return PostFuncDal({ inBodyKeys: inModalObject });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostFromModalFuncDal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFuncDal({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = async ({ LocalBodyAsModal }) => {
    return PostUploadFromModalFuncDal({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return PostGetSelectColumnsFuncDal({ LocalBodyAsModal });
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc, PostFilterFunc, PostCustompkFunc,
    PostWithKeysCheckFunc
};
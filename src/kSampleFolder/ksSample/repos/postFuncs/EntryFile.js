
import {
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal,
    PostUploadFunc as PostUploadFuncDal, PostGetSelectColumnsFunc as PostGetSelectColumnsFuncDal,
    PostUploadFromModalFunc as PostUploadFromModalFuncDal,
    PostCustomPkFunc as PostCustomPkFuncDal,
    PostWithKeysCheckFunc as PostWithKeysCheckFuncDal,
    GetUsingLoadAshFunc as GetUsingLoadAshFuncDal,
    FilterDataFrombodyFunc as FilterDataFrombodyFuncDal,
    GetsummaryFunc as GetsummaryFuncDal,
    GetWeeksummaryFunc as GetWeeksummaryFuncDal,
    PostSaveWithCheckingFunc as PostSaveWithCheckingFuncDal
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

let PostSaveWithCheckingFunc = async ({ inInSertObject, inRefFilterObject }) => {
    return PostSaveWithCheckingFuncDal({ inInSertObject, inRefFilterObject });
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

let GetUsingLoadAshFunc = ({ inId, inFindKey }) => {
    return GetUsingLoadAshFuncDal({ inId, inFindKey });
};

let GetsummaryFunc = ({ inFindKey }) => {
    return GetsummaryFuncDal({ inFindKey });
};

let GetWeeksummaryFunc = ({ inFindKey }) => {
    return GetWeeksummaryFuncDal({ inFindKey });
};

let FilterDataFrombodyFunc = ({ inFindValue, inFindKey }) => {
    return FilterDataFrombodyFuncDal({ inFindValue, inFindKey });
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc, PostFilterFunc, PostCustompkFunc,
    PostWithKeysCheckFunc, GetUsingLoadAshFunc, FilterDataFrombodyFunc, GetsummaryFunc, GetWeeksummaryFunc,PostSaveWithCheckingFunc
};
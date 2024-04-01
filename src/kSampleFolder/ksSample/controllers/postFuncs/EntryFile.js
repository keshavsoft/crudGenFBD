import {
    PostFunc as PostFuncRepo,
    PostFromModalFunc as PostFromModalFuncRepo,
    PostUploadFunc as PostUploadFuncRepo,
    PostGetSelectColumnsFunc as PostGetSelectColumnsFuncRepo,
    PostUploadFromModalFunc as PostUploadFromModalFuncRepo, PostFilterFunc as PostFilterFuncRepo,
    PostCustompkFunc as PostCustompkFuncRepo,
    PostWithKeysCheckFunc as PostWithKeysCheckFuncRepo,
    GetUsingLoadAshFunc as GetUsingLoadAshFuncRepo,
    FilterDataFrombodyFunc as FilterDataFrombodyFuncRepo,
    GetsummaryFunc as GetsummaryFuncRepo,
    GetWeeksummaryFunc as GetWeeksummaryFuncrepo,
    PostSaveWithCheckingFunc as PostSaveWithCheckingFuncrepo
} from '../../repos/postFuncs/EntryFile.js';

import {
    ColumnsPullFunc
} from '../../DataColumns.js';

import { ClassSample } from '../../ModalClass.js';


let PostFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await PostFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostCustomPkFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalFromRepo = await PostCustompkFuncRepo({ ...LocalBody });

    res.json(LocalFromRepo);
};

let PostWithKeysCheckFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalFromRepo = await PostWithKeysCheckFuncRepo({ ...LocalBody });


    res.json(LocalFromRepo);
};

let PostSaveWithCheckingFunc = async (req, res) => {
    let LocalInSertObject = req.body.InSertObject;
    let localRefFilterObject = req.body.references.FilterObject;

    let LocalFromRepo = await PostSaveWithCheckingFuncrepo({
        inInSertObject: LocalInSertObject, inRefFilterObject: localRefFilterObject
    });

    res.json(LocalFromRepo);
};

let PostFilterFunc = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromRepo = await PostFilterFuncRepo({ ...LocalBody });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostUploadImageFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncRepo({ ...LocalModalObject });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostFromModalFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostFromModalFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

let PostUploadFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalModalObject = LocalFromArray({ inArray: LocalBodyData });

    let LocalFromRepo = PostUploadFuncRepo({ LocalBodyAsModal: LocalModalObject });
    res.json(LocalFromRepo);
};

let LocalFromArray = ({ inArray }) => {
    let LocalNewAray = [];

    LocalNewAray = inArray.map(element => {
        return new ClassSample({ ...element });
    });

    return LocalNewAray;
};

let PostUploadFromModalFunc = async (req, res) => {
    let LocalBodyData = req.body;

    let LocalFromRepo = await PostUploadFromModalFuncRepo({ LocalBodyAsModal: LocalBodyData });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostGetSelectColumnsFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostGetSelectColumnsFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

let GetUsingLoadAshFunc = (req, res) => {
    let LocalBodyFindKey = req.body.FindKey
    let LocalFromParamsId = req.params.Id

    let LocalFromRepo = GetUsingLoadAshFuncRepo({ inFindKey: LocalBodyFindKey, inId: LocalFromParamsId });
    res.json(LocalFromRepo);
};

let GetsummaryFunc = (req, res) => {
    let LocalBodyFindKey = req.body.FindKey

    let LocalFromRepo = GetsummaryFuncRepo({ inFindKey: LocalBodyFindKey });
    res.json(LocalFromRepo);
};

let GetWeeksummaryFunc = (req, res) => {
    let LocalBodyFilterKey = req.body.FilterKey;
    let LocalBodyGroupKey = req.body.GroupKey;

    let LocalFromRepo = GetWeeksummaryFuncrepo({ inFindKey: LocalBodyFindKey });
    res.json(LocalFromRepo);
};

let FilterDataFrombodyFunc = (req, res) => {
    let LocalBodyFindKey = req.body.FindKey
    let LocalBodyFindValue = req.body.FindValue

    let LocalFromRepo = FilterDataFrombodyFuncRepo({ inFindKey: LocalBodyFindKey, inFindValue: LocalBodyFindValue });
    res.json(LocalFromRepo);
};



export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc,
    PostUploadImageFunc, PostFilterFunc, PostCustomPkFunc,
    PostWithKeysCheckFunc, GetUsingLoadAshFunc, FilterDataFrombodyFunc, GetsummaryFunc, GetWeeksummaryFunc, PostSaveWithCheckingFunc
};
import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';

let PostFunc = ({ inFolderName }) => {
    return StartFuncPullData({ inFolderName });
};

export { PostFunc };
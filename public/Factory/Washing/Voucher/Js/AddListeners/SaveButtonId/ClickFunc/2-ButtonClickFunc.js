import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async () => {
    let ResponseData = await StartFuncPostFetch();
    StartFuncAfterFetch()
};

export { StartFunc };
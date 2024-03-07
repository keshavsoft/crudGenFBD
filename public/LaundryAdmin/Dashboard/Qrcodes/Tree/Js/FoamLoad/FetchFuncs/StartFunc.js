import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";
import { StartFunc as StartFuncAfterFetch } from "../AfterFetch/EntryFile.js";

const StartFunc = async () => {
    let Returndata = await StartFuncFetchFunc();
    StartFuncAfterFetch({ inData: Returndata })
};
export { StartFunc };
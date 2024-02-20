import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/EntryFile.js";

const StartFunc = ({ inPk }) => {
     StartFuncFetchFuncs({ inPk });
};
export { StartFunc };
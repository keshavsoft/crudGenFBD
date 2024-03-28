import { StartFunc as StartFuncDateFilerButtonId } from "./DateFilerButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncDateFilerButtonId();
    LocalClickFunc();

};
const LocalClickFunc = () => {
    let jVarLocalHtmlDateFilerButtonId = 'DateFilerButtonId';
    let jVarLocalHtmlDateFiler = document.getElementById(jVarLocalHtmlDateFilerButtonId);
    jVarLocalHtmlDateFiler.click();

}
export { StartFunc };
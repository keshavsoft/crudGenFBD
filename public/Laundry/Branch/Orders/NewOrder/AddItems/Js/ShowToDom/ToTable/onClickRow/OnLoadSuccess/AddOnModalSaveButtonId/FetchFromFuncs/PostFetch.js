import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
    let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
    let jVarLocalRowPk = JvarLocalData.pk;

    let LocalroutePath = ConfigJson.routePath;
    let LocalfolderName = ConfigJson.folderName;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    // let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}`;
    // let jVarLocalFetchUrl = `/${LocalroutePath}/${LocalfolderName}/${LocaltableName}/InsertToKey/${jVarLocalRowPk}/ItemsInOrder`;
    let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/NewOrder/AddItem/Kakinada`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };


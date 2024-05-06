import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = ConfigJson.routePath;
    let jVarLocalFolderName = ConfigJson.folderName;
    let jVarLocalTableName = ConfigJson.tableName;
    let jVarLocalLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;
    let jVarLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });

    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/${jVarLocalFolderName}/${jVarLocalTableName}/NonMaxRow/${jVarLocalOrderNumber}`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalFromFetchJson));
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
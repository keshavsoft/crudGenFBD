const StartFunc = ({ inItemSerial }) => {
    let jVarLocalOrderNumber = jFLocalFromDomOrderNumberId();
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" })

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.FolderName = ApiConfigJson.ForFetch.FolderName;
    // jVarLocalToLocalStorage.FileName = ApiConfigJson.ForFetch.JsonFileName;
    jVarLocalToLocalStorage.FileName = `${jVarLocalBranchName}.json`;

    jVarLocalToLocalStorage.ItemName = ApiConfigJson.ForFetch.ItemName;
    jVarLocalToLocalStorage.ScreenName = "Create";

    jVarLocalToLocalStorage.InsertKey = "ItemsInOrder";
    jVarLocalToLocalStorage.MainRowPK = jVarLocalOrderNumber;
    jVarLocalToLocalStorage.RowPK = inItemSerial;

    return jVarLocalToLocalStorage;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML.trim();
    return jVarHtmlOrderNumberIdValue;
};

let jFLocalItemSerialClass = ({ inTabPane }) => {
    try {
        // let jVarClosestTabPane = inTabPane;
        let jVarLocalItemsTableBodyId = document.getElementById("ItemsTableBodyId");

        // let jVarLocalItemSerialClass = jVarClosestTabPane.querySelector(".ItemSerialClass");

        // let localReturnObject = {
        //     ItemSerial: jVarLocalItemSerialClass.value
        // };

        let localReturnObject = {
            ItemSerial: jVarLocalItemsTableBodyId.rows.length + 1
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalItemSelect = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalItemSerialClass = jVarClosestTabPane.querySelector(".ItemSelect");

        let localReturnObject = {
            ItemSerial: jVarLocalItemSerialClass.value,
            ItemSerialID: jVarLocalItemSerialClass
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalFactoriesSelect = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalFactorySelectClass = jVarClosestTabPane.querySelector(".FactorySelectClass");

        let localReturnObject = {
            location: jVarLocalFactorySelectClass.value,
            locationID: jVarLocalFactorySelectClass
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalFromDomAsInt = ({ inHtmlId }) => {
    let jVarLocalReturnObject = {};
    let jVarLocalPcsId = inHtmlId;

    let jVarLocalPcsIdValue = jVarLocalPcsId.value;
    let jVarLocalPcsIdName = jVarLocalPcsId.name;

    jVarLocalReturnObject[jVarLocalPcsIdName] = parseInt(jVarLocalPcsIdValue);
    return jVarLocalReturnObject;
};

function selectItemByValue({ inHtmlSelect }) {
    for (var i = 0; i < inHtmlSelect.options.length; i++) {
        if (inHtmlSelect.options[i].value === inHtmlSelect.value) {
            return inHtmlSelect.options[i].text;
        }
    }
};

let jFLocalDeliveryDateTimeClass = ({ inTabPane }) => {
    try {
        let jVarClosestTabPane = inTabPane;
        let jVarLocalItemSerialClass = jVarClosestTabPane.querySelector(".DeliveryDateTimeClass");

        let localReturnObject = {
            DeliveryDateTime: jVarLocalItemSerialClass.value
        };

        return localReturnObject;
    } catch (error) {
        console.log("error : ", error);
    };
};

export { StartFunc };
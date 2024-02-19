const StartFunc = () => {
    let jVarLocalToLocalStorage = {};
    jVarLocalToLocalStorage = jFLocalPrepareObject();

    return jVarLocalToLocalStorage;
};

let jFLocalPrepareObject = () => {
    let jVarLocalAddOnServiceId = document.getElementById("AddOnServiceId");
    let jVarLocalAddOnRateId = document.getElementById("AddOnRateId");
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");
    let jVarLocalAddOnImageId = document.getElementById("AddOnImageId");

    let jVarLocalAddOnRateIdValue = jVarLocalAddOnRateId.value;
    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarLocaljVarLocalAddOnImageIdValue = jVarLocalAddOnImageId.value;

    var jVarLocalAddOnServiceIdtext = jVarLocalAddOnServiceId.options[jVarLocalAddOnServiceId.selectedIndex].text;

    return {
        AddOnService: jVarLocalAddOnServiceIdtext,
        AddOnRate: parseInt(jVarLocalAddOnRateIdValue),
        AddOnItemSerial: parseInt(jVarLocaljVarLocalAddOnItemIdValue),
        AddOnImageSerial: jVarLocaljVarLocalAddOnImageIdValue
    };
};

export { StartFunc };
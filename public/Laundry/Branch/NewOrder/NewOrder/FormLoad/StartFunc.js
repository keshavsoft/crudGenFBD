import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/StartFunc.js";

let StartFunc = () => {
    StartFuncFromUrlParams();
    jFShowDeliveryDateTime();
    jFLocalCurrentDateTimeToday();
};

const jFShowDeliveryDateTime = () => {
    let jVarLocalHtmlId = "MenItemsTabId";
    let jVarLocalMenItemsTabId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalDeliveryDateTimeClass = jVarLocalMenItemsTabId.querySelector(".DeliveryDateTimeClass");
    let jVarLocalToShowValue = jFLocalCurrentDateTime();

    jVarLocalDeliveryDateTimeClass.value = jVarLocalToShowValue;
};

let jFLocalCurrentDateTime = () => {
    let date1 = new Date();
    let jVarLocalAddDays7 = new Date();
    jVarLocalAddDays7.setDate(date1.getDate() + 7);
    let date = new Date(jVarLocalAddDays7);

    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    // let HH = date.getHours();

    let HH = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let mm = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let ss = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    return `${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`;
};

let jFLocalCurrentDateTimeToday = () => {
    let jVarLocalHtmlId= "Currentdateandtime";
    let jVarLocalDateId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalDateValue = jFLocalCurrentDateTime1();
    jVarLocalDateId.value = jVarLocalDateValue;
};

let jFLocalCurrentDateTime1 = () => {
    let jVarLocalAddDays7 = new Date();
    let date = new Date(jVarLocalAddDays7);

    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    // let HH = date.getHours();

    let HH = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let mm = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let ss = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    return `${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`;
};

export { StartFunc };
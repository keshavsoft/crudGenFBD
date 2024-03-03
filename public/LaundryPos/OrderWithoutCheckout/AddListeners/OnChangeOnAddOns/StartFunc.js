import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/MenItems.js";

let StartFunc = () => {
    LocalOptionsAdd();
    let jVarLocalItemSelectId = document.getElementById("AddOnServiceId");
    if (jVarLocalItemSelectId === null === false) jVarLocalItemSelectId.addEventListener("change", (event) => {
        jFLocalItemSelectChange({
            inEvent: event,
            inLocalSelectKey: jVarLocalItemSelectId.value
        });
    });

};

let jFLocalItemSelectChange = ({ inEvent, inLocalSelectKey }) => {
    try {
        let LocalinLocalSelectKey = inLocalSelectKey;
        let jVarLocalStorageKey = "AddOns";
        let jVarLocalRate = document.getElementById("AddOnRateId");
        let jVarLocalItems = StartFuncFromLocalStorage({ inLocalStorageKey: jVarLocalStorageKey });
        let jVarLocalFind = jVarLocalItems.find(element => element.pk == LocalinLocalSelectKey);
        jVarLocalRate.value = jVarLocalFind.AddOnRate;

    } catch (error) {
        console.log("error : ", error);
    };
};

const LocalOptionsAdd = () => {
    let LocalgetData = JSON.parse(localStorage.getItem("AddOns"));

    if (LocalgetData === null) return;
    let jVarLocalItemSelectId = document.getElementById("AddOnServiceId");

    LocalgetData.forEach(element => {
        let LocalOption = document.createElement("option");
        LocalOption.value = element.pk;
        LocalOption.innerHTML = element.AddOnService;
        jVarLocalItemSelectId.appendChild(LocalOption)
    });
};
export { StartFunc };
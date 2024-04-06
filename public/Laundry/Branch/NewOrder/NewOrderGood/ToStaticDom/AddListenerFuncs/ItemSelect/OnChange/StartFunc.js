// import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/MenItems.js";

let StartFunc = () => {
    jFLocalMenTab();
};

let jFLocalMenTab = () => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalItemSelect = jVarLocalMenItemsTabId.querySelector(".ItemSelect");

        if (jVarLocalItemSelect === null === false) jVarLocalItemSelect.addEventListener("change", (event) => {
            jFLocalItemSelectChange({
                inEvent: event,
                inLocalStorageKey: "Items"
            });
        });
    };
};

let jFLocalFromLocalStorage = () => {
    let jVarLocalStorageKey = "Items";

    let jVarLocalItems = localStorage.getItem(jVarLocalStorageKey);

    return JSON.parse(jVarLocalItems);
};

let jFLocalItemSelectChange = ({ inEvent }) => {
    try {

        let jVarLocalEvent = event;
        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
        let jVarLocalClosestTab = jVarLocalCurrentTarget.closest(".tab-pane");
        let jVarLocalRate = jVarLocalClosestTab.querySelector(".RateClass");

        let jVarLocalItemPk = jVarLocalCurrentTarget.value;

        let jVarLocalItems = jFLocalFromLocalStorage();

        let jVarLocalFind = Object.values(jVarLocalItems).find(element => element.pk == jVarLocalItemPk);

        jVarLocalRate.value = jVarLocalFind.DryWashRate;

    } catch (error) {
        console.log("error : ", error);
    };
};

export { StartFunc };
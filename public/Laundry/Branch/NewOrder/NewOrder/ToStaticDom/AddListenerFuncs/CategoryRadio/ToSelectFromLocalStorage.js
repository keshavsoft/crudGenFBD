const jFLocalBulk = () => {
    let jVarLocalStorageKey = "Items";
    let jVarLocalDataNeeded = {};

    if (jVarLocalStorageKey in localStorage) {
        let jVarLocalCustomerData = localStorage.getItem(jVarLocalStorageKey);
        let jVarLocalCustomerDataAsJson = JSON.parse(jVarLocalCustomerData);

        jVarLocalDataNeeded = jVarLocalCustomerDataAsJson;
    };

    return jVarLocalDataNeeded;
};

let jFLocalFromLocalStorage = ({ inCategory }) => {
    let jVarLocalFromLocalStorage = jFLocalBulk();
    
    let jVarLocalFiletered = Object.values(jVarLocalFromLocalStorage).filter(element => {
        return element.Category === inCategory;
    });

    return jVarLocalFiletered;
};


let StartFunc = ({ inCategory }) => {
    let jVarLocalFromLocalStorage = jFLocalFromLocalStorage({ inCategory });

    jFCommonSelectFill({
        inData: jVarLocalFromLocalStorage,
        inHtmlId: "MenItemsTabId"
    });
};

let jFCommonSelectFill = ({ inData, inHtmlId }) => {
    let jVarLocalinHtmlId = document.getElementById(inHtmlId);

    if (jVarLocalinHtmlId === null === false) {
        let jVarLocalWomanWashSelectId = jVarLocalinHtmlId.querySelector("select.ItemSelect");

        let jVarLocalMenItems = inData.map(element => {
            return {
                ItemName: element.ItemName,
                pk: element.pk
            }
        });

        jFLocalAddToSelect({
            inData: jVarLocalMenItems,
            inHtmlSelect: jVarLocalWomanWashSelectId
        });
    };
};

let jFLocalAddToSelect = ({ inData, inHtmlSelect }) => {
    if (inHtmlSelect === null === false) {
        inHtmlSelect.innerHTML = "";

        inData.forEach((element, LoopIndex) => {
            var car = new Option(element.ItemName, element.pk);
            inHtmlSelect.options.add(car);
        });
    };
};

export { StartFunc };
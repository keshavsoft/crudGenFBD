import { StartFunc as StartFuncItemButtonClick } from "./AddItemToServer/1-ClickAssign.js";
import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";

let StartFunc = () => {
    StartFuncItemButtonClick();
    StartFuncOnChange();
    jFLocalSearchItemButtonId();
};

let jFLocalSearchItemButtonId = () => {
    let jVarLocalHtmlId = "SearchItemButtonId";
    let jVarLocaljVarLocalHtmlId = document.getElementById(jVarLocalHtmlId);
    jVarLocaljVarLocalHtmlId.addEventListener("click", jFLocalButtonClick);
};

let jFFromLocalStorage = () => {
    let jVarLocalItemsData = localStorage.getItem("Items");
    return JSON.parse(jVarLocalItemsData);
};

let jFLocalButtonClick = () => {
    let jVarLocalHtmlId = "largeModal";
    let jVarLocallargeModal = document.getElementById(jVarLocalHtmlId);

    jVarLocallargeModal.addEventListener('shown.bs.modal', event => {
        let jVarLocalHtmlId = "customSearch";
        let jVarLocalcustomSearch = document.getElementById(jVarLocalHtmlId);
        jVarLocalcustomSearch.focus();

        var $table = $('#ModalItemsTable');

        $table.bootstrapTable({
            data: jFFromLocalStorage(),
            onClickRow: jFLocalRowClick
        });
        // do something...
    });

    const myModal = new bootstrap.Modal('#largeModal', {
        keyboard: false
    });

    myModal.show();


    // $table.bootstrapTable({
    //     onPostBody: function () {
    //         $(".fixed-table-toolbar .search .search-input").focus()
    //     }
    // });
};

let jFLocalRowClick = (row, $element, field) => {
    console.log("aaa : ", row);
    let k1 = document.getElementById("RateInputId");
    k1.value = row.DryWashRate;
};

export { StartFunc };
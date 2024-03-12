// import { StartFunc as StartFuncAddListeners } from "../../AddListeners/EntryFile.js";

let StartFunc = async ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    jVarLocaltableHeadRow.appendChild(jFLocalSerialNumberColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalpkColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalVoucherNumberColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalBranchName());
    jVarLocaltableHeadRow.appendChild(jFLocalFactory());
    jVarLocaltableHeadRow.appendChild(jFLocalDateColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalDescriptionColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalDateTimeColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalItemsColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalScanColumn());

    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalDataToShow,
    });
    // StartFuncAddListeners();
};


let jFLocalSerialNumberColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "#";
    jVarLocalNewTh.setAttribute("data-formatter", "jFGlobalSerialColumn")
    return jVarLocalNewTh;
};

let jFLocalpkColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "pk";
    jVarLocalNewTh.dataset.field = "pk";
    return jVarLocalNewTh;
};

let jFLocalVoucherNumberColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Dc #";
    jVarLocalNewTh.dataset.field = "pk";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};
let jFLocalBranchName = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "BranchName";
    jVarLocalNewTh.dataset.field = "BranchName";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalFactory = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "To Factory";
    jVarLocalNewTh.dataset.field = "Factory";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalDateColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Date";
    jVarLocalNewTh.dataset.field = "Date";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalDescriptionColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Description";
    jVarLocalNewTh.dataset.field = "Description";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};

let jFLocalDateTimeColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "DateTime";
    jVarLocalNewTh.dataset.field = "DateTime";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalItemsColumn = () => {
    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Items";
    jVarLocalNewTh.setAttribute("data-formatter", "ItemsFormatter")
    jVarLocalNewTh.setAttribute("data-footer-formatter", "priceFormatter")

    return jVarLocalNewTh;
};

let jFLocalScanColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Print";
    jVarLocalNewTh.dataset.field = "operate"
    jVarLocalNewTh.setAttribute("data-formatter", "operateFormatter")

    return jVarLocalNewTh;
};

export { StartFunc }
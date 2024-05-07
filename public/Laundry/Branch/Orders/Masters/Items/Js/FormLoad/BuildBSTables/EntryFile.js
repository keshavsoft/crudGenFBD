const StartFunc = () => {
    jFLocalToTableTag();
    jFPrepareColumns();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: []
    });
};

const jFLocalToTableTag = () => {
    var $table = $('#table');

    $table.attr("data-show-columns", "true");
    $table.attr("data-search", "true");
    $table.attr("data-search-highlight", "true");
    $table.attr("data-searchable", "true");
    $table.attr("data-show-columns-toggle-all", "true");
    $table.attr("data-minimum-count-columns", "3");
    $table.attr("data-show-pagination-switch", "true");
    $table.attr("data-pagination", "true");
    // $table.attr("data-toggle","table");
    $table.attr("data-id-field","pk");
};

const jFPrepareColumns = () => {
    jFPrepareCategory();
    jFPrepareItemName();
    jFPreparePieces();
    jFPrepareWashType();
    jFPrepareWashRate();

};

const jFPrepareCategory = () => {
    var $Category = $('#Category');
    $Category.attr({
        "data-field": "Category",
        "data-sortable": "true",
        "data-sort-name": "Category",
        "data-sort-order": "desc"
    });
    $Category.addClass("d-none d-sm-table-cell");
};

const jFPrepareItemName = () => {
    var $ItemName = $('#ItemName');
    $ItemName.attr({
        "data-field": "ItemName",
        "data-sortable": "true",
        "data-sort-name": "ItemName",
        "data-sort-order": "desc"
    });
    $ItemName.addClass("d-none d-sm-table-cell");
};

const jFPreparePieces = () => {
    var $Pieces = $('#Pieces');
    $Pieces.attr({
        "data-field": "Pcs",
        "data-sortable": "true",
        "data-sort-name": "Pcs",
        "data-sort-order": "desc",
        "data-halign":"left",
        "data-align":"right"
    });
    $Pieces.addClass("d-none d-sm-table-cell");
};

const jFPrepareWashType = () => {
    var $WashType = $('#WashType');
    $WashType.attr({
        "data-field": "Category",
        "data-sortable": "true",
        "data-sort-name": "Category",
        "data-sort-order": "desc"
    });
    $WashType.addClass("d-none d-sm-table-cell");
};

const jFPrepareWashRate = () => {
    var $DryWashRate = $('#DryWashRate');
    $DryWashRate.attr({
        "data-field": "Pcs",
        "data-sortable": "true",
        "data-sort-name": "Pcs",
        "data-sort-order": "desc",
        "data-halign":"left",
        "data-align":"right"
    });
    $DryWashRate.addClass("d-none d-sm-table-cell");
};

export { StartFunc };

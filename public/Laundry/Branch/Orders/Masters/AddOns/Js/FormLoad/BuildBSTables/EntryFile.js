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
    $table.attr("data-minimum-count-columns", "2");
    $table.attr("data-show-pagination-switch", "true");
    $table.attr("data-pagination", "true");
    $table.attr("data-id-field", "pk")
};

const jFPrepareColumns = () => {
    jFPrepareAddOnService();
    jFPrepareAddOnRate();
};

const jFPrepareAddOnService = () => {
    var $AddOnService = $('#AddOnService');
    $AddOnService.attr({
        "data-field": "AddOnService",
        "data-sortable": "true",
        "data-sort-name": "AddOnService",
        "data-sort-order": "desc"
    });
    $AddOnService.addClass("d-none d-sm-table-cell");
};

const jFPrepareAddOnRate = () => {
    var $AddOnRate = $('#AddOnRate');
    $AddOnRate.attr({
        "data-field": "AddOnRate",
        "data-sortable": "true",
        "data-sort-name": "AddOnRate",
        "data-sort-order": "desc",
        "data-halign": "left",
        "data-align": "right"
    });
    $AddOnRate.addClass("d-none d-sm-table-cell");
};

export { StartFunc };

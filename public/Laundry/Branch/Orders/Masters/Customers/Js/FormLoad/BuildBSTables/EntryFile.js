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
};

const jFPrepareColumns = () => {
    jFPrepareMobile();
    jFPrepareCustomerName();
    jFPrepareCity();

};

const jFPrepareMobile = () => {
    var $mobile = $('#MobileId');
    $mobile.attr({
        "data-field": "Mobile",
        "data-sortable": "true",
        "data-sort-name": "Mobile",
        "data-sort-order": "desc"
    });
    $mobile.addClass("d-none d-sm-table-cell");
};

const jFPrepareCustomerName = () => {
    var $CustomerName = $('#CustomerNameId');
    $CustomerName.attr({
        "data-field": "CustomerName",
        "data-sortable": "true",
        "data-sort-name": "CustomerName",
        "data-sort-order": "desc"
    });
    $CustomerName.addClass("d-none d-sm-table-cell");
};

const jFPrepareCity = () => {
    var $City = $('#CityId');
    $City.attr({
        "data-field": "City",
        "data-sortable": "true",
        "data-sort-name": "City",
        "data-sort-order": "desc"
    });
    $City.addClass("d-none d-sm-table-cell");
};

export { StartFunc };

const StartFunc = () => {
    jFLocalToTableTag();
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

export { StartFunc };

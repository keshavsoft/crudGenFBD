const StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;

    if (data) {
        localStorage.setItem("CustomerNames", JSON.stringify(data));
    };

    // var $table = $('#tableId');

    // $table.bootstrapTable("destroy").bootstrapTable({
    //     data: data,
    // });


};

export { StartFunc };
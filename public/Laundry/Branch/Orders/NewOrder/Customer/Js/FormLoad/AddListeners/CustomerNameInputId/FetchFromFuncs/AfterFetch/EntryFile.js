let StartFunc = (inData) => {
    console.log("inData:", inData);
    var $table = $('#table')

    $table.bootstrapTable({
        data: inData
    })
};

export { StartFunc }
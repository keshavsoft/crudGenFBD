const StartFunc = (row, $element, field) => {

    if (field === 3) {

        $("#AddOnModal").modal("show")
        let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
        let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
        let jVarLocalItemSerial = row.ItemSerial;
        let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);
        var $table = $('#AddOnTable')

        $table.bootstrapTable({
            data: jVarLocalFilterData
        });

    };

};

export { StartFunc };
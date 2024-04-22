let StartFunc = ({ inData }) => {
    let jVarLocalDataNeeded = inData;

    let jVarLocalTemplate = document.getElementById("TemplateForQrCodePrint");
    let clone = jVarLocalTemplate.content.cloneNode("true");

    let jVarLocalBranchClass = clone.querySelector(".BranchClass");
    jVarLocalBranchClass.textContent = "aaaaaaaaaa";

    // {{BookingData.OrderData.BranchName}}-{{location}}

    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalModalBody = document.getElementById("ModalBody");
    jVarLocalModalBody.innerHTML = str;

    let jVarLocalId = "ModalForQrCode";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

let GenerateQrCodeOnModal = ({ QrDataKey, inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};
    opts.text = `${inQrData.pk}~`
    // opts.text += `${inQrData.GenerateReference.FileNameOnly}-${inQrData.location}~`
    opts.text += `${inQrData.pk}-${inQrData.OrderNumber}~`
    opts.text += `${inQrData.ItemName}~`
    opts.text += `${inQrData.WashType}@${inQrData.ItemSerial}/${inQrData.Pcs}/${inQrData.TotalQrCodes}~`
    opts.text += `${inQrData.AddOnDataAsString}~`
    opts.text += `${inQrData.BookingData.OrderData.Currentdateandtime}~`
    opts.text += `${inQrData.DeliveryDateTime}`;
    // opts.text = "100";
    opts.bcid = "qrcode";
    opts.scaleX = 1;
    opts.scaleY = 1;
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.log("error : ", e);

        return;
    }

    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};

export { StartFunc };
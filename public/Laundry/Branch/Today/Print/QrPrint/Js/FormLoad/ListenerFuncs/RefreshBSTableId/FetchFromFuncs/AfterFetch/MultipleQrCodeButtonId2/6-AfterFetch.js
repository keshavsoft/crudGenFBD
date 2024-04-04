import { StartFunc as StartFuncQrCodeToModal } from "./QrCodeToModal.js";

let StartFunc = ({ inQrCodeData, inRowPk }) => {
    let localQrodeData = inQrCodeData;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let localFilterQrcodeData = localQrodeData.filter(element => element.OrderNumber == inRowPk && element.BookingData.OrderData.BranchName == jVarLocalBranchName);
    let jFLocalData = jFLocalAddOnData({ inQrCodeData: localFilterQrcodeData });

    StartFuncQrCodeToModal({ inData: jFLocalData }).then();
};

let jFLocalAddOnData = ({ inQrCodeData }) => {
    let jFLocalTotalQrCodes = inQrCodeData.length;

    let jFLocalData = inQrCodeData.map(element => {

        element.DeliveryDateTime = LocalDateFormater({ inDate: element.DeliveryDateTime });
        element.OrderDate = LocalDateFormater({ inDate: element.BookingData.OrderData.Currentdateandtime });
        element.AddOnDataAsString = Object.values(element.BookingData.AddOnData).map(LoopAddOn => {
            if (element.ItemSerial == LoopAddOn.AddOnItemSerial) {
                return LoopAddOn.AddOnRate > 0 ? `${LoopAddOn.AddOnService}` : LoopAddOn.AddOnService;
            };
        }).join(", ");

        element.TotalQrCodes = jFLocalTotalQrCodes;

        return element;
    });

    return jFLocalData;
};

const LocalDateFormater = ({ inDate }) => {
    const dateTimeString = inDate;
    const dateComponents = dateTimeString.split("T")[0].split("-");
    const year = dateComponents[0].slice(2);
    const month = dateComponents[1];
    const day = dateComponents[2];
    // Formatting into dd-mm-yy format
    return `${day}-${month}-${year}`;

}



export { StartFunc };
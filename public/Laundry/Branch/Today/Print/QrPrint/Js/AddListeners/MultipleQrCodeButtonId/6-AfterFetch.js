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
        element.DeliveryDateTime = element.DeliveryDateTime.split("T")[0];
        element.OrderDate = element.BookingData.OrderData.Currentdateandtime.split("T")[0];
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



export { StartFunc };
import { StartFunc as StartFuncQrCodeToModal } from "./QrCodeToModal.js";

let StartFunc = ({ inQrCodeData, inRowPk }) => {
    let localQrodeData = inQrCodeData;
    let localFilterQrcodeData = inQrCodeData.filter(element => element.OrderNumber == inRowPk);


    let jFLocalData = jFLocalAddOnData({ inQrCodeData: localFilterQrcodeData });

    StartFuncQrCodeToModal({ inData: jFLocalData }).then();
};

let jFLocalAddOnData = ({ inQrCodeData }) => {
    let jFLocalTotalQrCodes = inQrCodeData.length;

    let jFLocalData = inQrCodeData.map(element => {
        element.AddOnDataAsString = Object.values(element.BookingData.AddOnData).map(LoopAddOn => {
            return LoopAddOn.AddOnRate > 0 ? `${LoopAddOn.AddOnService}@${LoopAddOn.AddOnRate}` : LoopAddOn.AddOnService;
        }).join(", ");

        element.TotalQrCodes = jFLocalTotalQrCodes;

        return element;
    });

    return jFLocalData;
};

export { StartFunc };
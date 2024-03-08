import { StartFunc as StartFuncQrCodeToModal } from "./QrCodeToModal.js";

let StartFunc = ({ inQrCodeData, inRowPk }) => {
    let localQrodeData = inQrCodeData;
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let localFilterQrcodeData = localQrodeData.filter(element => element.OrderNumber == inRowPk && element.BookingData.OrderData.BranchName == jVarLocalBranchName);


    let jFLocalData = jFLocalAddOnData({ inQrCodeData: localFilterQrcodeData });

    StartFuncQrCodeToModal({ inData: jFLocalData }).then();
};

let jFLocalAddOnData = ({ inQrCodeData }) => {
    let jFLocalTotalQrCodes = inQrCodeData.length;

    let jFLocalData = inQrCodeData.map(element => {
        element.AddOnDataAsString = Object.values(element.BookingData.AddOnData).map(LoopAddOn => {
            if (element.ItemSerial == LoopAddOn.AddOnItemSerial) {
                return LoopAddOn.AddOnRate > 0 ? `${LoopAddOn.AddOnService}@${LoopAddOn.AddOnRate}` : LoopAddOn.AddOnService;
            };
        }).join(", ");

        element.TotalQrCodes = jFLocalTotalQrCodes;

        return element;
    });

    return jFLocalData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncQrCodeDetails } from "./Promises/QrCodeDetails/EntryFile.js";

let StartFunc = async () => {
    const [a, b, c] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails(), StartFuncQrCodeDetails()]);

    if (a.KTF && b.KTF && c.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalItemsData = b.JsonData;
        let jVarLocalQrCodeDetails = c.JsonData;
        // let jVarLocalFactoryName = getUrlQueryParams({ inGetKey: "BranchName" });
        let jVarLocalFactoryName = localStorage.getItem("FactoryName");

        let LocalBranchFilterData = jVarLocalDcData.filter(e => e.Factory == jVarLocalFactoryName)
        let LocalScanedFilterData = jVarLocalItemsData.filter(e => e.FactorySelected == jVarLocalFactoryName)
        let LocalScanedQrCodeDetails = jVarLocalQrCodeDetails.filter(e => e.FactorySelected == jVarLocalFactoryName)

        let jVarLocalData = jFLocalItemsData({
            inDcData: LocalBranchFilterData,
            inItemsData: LocalScanedFilterData,
            inQrCodeDetails: LocalScanedQrCodeDetails

        });

        StartFuncAfterFetch({ inDataToShow: jVarLocalData });
    };
};

let jFLocalItemsData = ({ inDcData, inItemsData, inQrCodeDetails }) => {
    let jVarLocalDcData = inDcData;
    let jVarLocalItemsData = inItemsData;
    let jVarLocalQrCodeDetails = inQrCodeDetails;

    let localArrayObj = jVarLocalDcData;

    let jVarLocalReturnArray = localArrayObj.map((element) => {

        let LocalFilterdata = jVarLocalItemsData.filter(e => e.VoucherRef == element.pk)
        let LocalFilterQrcodeDetails = jVarLocalQrCodeDetails.filter(e => e.VoucherRef == element.pk)

        element.ItemDetails = jVarLocalItemsData.length > 0 ? LocalFilterdata.length : 0;
        element.QrCodeDetailsCount = jVarLocalQrCodeDetails.length > 0 ? LocalFilterQrcodeDetails.length : 0;

        return element;
    });

    return jVarLocalReturnArray;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc }
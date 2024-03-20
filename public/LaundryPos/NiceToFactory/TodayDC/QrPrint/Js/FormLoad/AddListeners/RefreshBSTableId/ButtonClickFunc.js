import { StartFunc as StartFuncAfterFetch } from "./FetchFuncs/AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncVoucherDetails(), StartFuncItemDetails()]);

    if (a.KTF && b.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalItemsData = b.JsonData;
        // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
        let jVarLocalBranchName = localStorage.getItem("BranchName");
        let jVarLocaldayDate = jFTodayDate();
        let FlterDataByBranch = jVarLocalDcData.filter(e => e.BranchName == jVarLocalBranchName && e.Date == jVarLocaldayDate);

        // let LocalBranchFilterData = jVarLocalDcData.filter(e => e.BranchName == jVarLocalBranchName)
        let LocalScanedFilterData = jVarLocalItemsData.filter(e => e.BranchName == jVarLocalBranchName)

        let jVarLocalData = jFLocalItemsData({
            inDcData: FlterDataByBranch,
            inItemsData: LocalScanedFilterData,

        });

        StartFuncAfterFetch({ inDataToShow: jVarLocalData });
    };
};

let jFLocalItemsData = ({ inDcData, inItemsData }) => {
    let jVarLocalDcData = inDcData;
    let jVarLocalItemsData = inItemsData;

    let localArrayObj = jVarLocalDcData;

    let jVarLocalReturnArray = localArrayObj.map((element) => {

        let LocalFilterdata = jVarLocalItemsData.filter(e => e.VoucherRef == element.pk)

        element.ItemDetails = jVarLocalItemsData.length > 0 ? LocalFilterdata.length : 0;

        return element;
    });

    return jVarLocalReturnArray;
};

const jFTodayDate = () => {
    var today = new Date();

    // Format today's date to match the "yyyy-mm-dd" format
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();

    return today = yyyy + '-' + mm + '-' + dd;

};



export { StartFunc }
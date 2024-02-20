import { StartFunc as StartFuncHeading } from "./AfterFetch/Headings/Heading.js";
import { StartFunc as StartFuncBody } from "./AfterFetch/ItemsTable/Body.js";
import { StartFunc as StartFuncFooter } from "./AfterFetch/Footer/Footer.js";

let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    let BillNumber = data.pk;
    let CustomerName = data.CustomerData.CustomerName;
    let CustomerMobile = data.CustomerData.CustomerMobile;
    let BookingDate = data.OrderData.Currentdateandtime;
    let ItemData = data.ItemsInOrder;
    let DiscountAmount = Object.values(data.CheckOutData)[0].GstData.DiscountAmount;
    let CGST = Object.values(data.CheckOutData)[0].GstData.CGST;
    let SGST = Object.values(data.CheckOutData)[0].GstData.SGST;
    let RoundOff = Object.values(data.CheckOutData)[0].RoundOff;
    let CashAmount = Object.values(data.CheckOutData)[0].CashAmount;
    let CardAmount = Object.values(data.CheckOutData)[0].CardAmount;
    let UPIAmount = Object.values(data.CheckOutData)[0].UPIAmount;
    
    StartFuncHeading({
        inBillNumberid: BillNumber,
        inCustomerNameid: CustomerName,
        inMobileNumberid: CustomerMobile,
        inBookingDateid: BookingDate,
    });
    StartFuncBody({inItemData: ItemData});
    StartFuncFooter({
        inDiscountAmountid: DiscountAmount,
        inCGSTid: CGST,
        inSGSTid: SGST,
        inRoundOffid: RoundOff,
        inCashAmount: CashAmount,
        inCardAmount: CardAmount,
        inUPIAmount: UPIAmount
    });
    jFLocalDuplicateBillOnDom();
};

let jFLocalDuplicateBillOnDom = () =>{
    let OriginalColId = document.getElementById("KCont1ColId");
    let OriginalInner = OriginalColId.innerHTML;
    let DupplicateColId = document.createElement("div");
    DupplicateColId.setAttribute('class', 'col-6');
    DupplicateColId.setAttribute('id', 'KCont2ColId');
    DupplicateColId.innerHTML = OriginalInner;
    let MainRowId = document.getElementById("KCont1RowId");
    MainRowId.appendChild(DupplicateColId);
    };
export { StartFunc };
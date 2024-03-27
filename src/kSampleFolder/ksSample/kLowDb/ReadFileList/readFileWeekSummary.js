import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/ReturnDbObject.js';
import _ from "lodash";

let StartFunc = ({ inFindKey }) => {
    let LocalFindKey = inFindKey;

    let LocalReturnData = { KTF: false };

    const db = StartFuncCommonFuncs();
    db.read();

    let LocalGroupBy = _.groupBy(db.data, (inRow) => {
        return eval(LocalFindKey)
    });

    var dataArray = [];
    for (var key in LocalGroupBy) dataArray.push({ key: key, value: LocalGroupBy[key] });

    LocalReturnData.JsonData = LocalStartFunc({ inData: dataArray });
    LocalReturnData.KTF = true;

    // db.write();

    return LocalReturnData;
};

const LocalStartFunc = ({ inData }) => {
    let Localdata = inData;
    let LocalPushData = [];
    Localdata.forEach(element => {
        element.firstOrder = 0;
        element.lastOrder = 0;
        element.TotalCount = 0;
        element.WeekFirst = 0;
        element.Weeklast = 0;
        element.TotalCount = element.value.length;


        if (element.value.length > 0) {
            let LastOrdeDate = element.value[element.value.length - 1];
            element.firstOrder = element.value[0];
            element.lastOrder = LastOrdeDate;
        };

        let LocalTodayData = filterOrdersWithinPastWeek({ inData: element.value });
        if (LocalTodayData.length > 0) {
            let TodayLastOrdeDate = LocalTodayData[LocalTodayData.length - 1];
            element.WeekFirst = LocalTodayData[0];
            element.Weeklast = TodayLastOrdeDate;
            let LocalTodayCount = LocalTodayData.length;
            element.WeekCount = LocalTodayCount;
        };
        delete element.value;
        LocalPushData.push(element)
    });
    return LocalPushData;
};

const filterOrdersWithinPastWeek = ({ inData }) => {
    let orders = inData
    let currentDate = new Date();

    let oneWeekAgo = new Date();
    oneWeekAgo.setDate(currentDate.getDate() - 7);

    let oneWeekOrders = orders.filter(order => {
        let orderDate = new Date(order.DateTime);
        return orderDate >= oneWeekAgo && orderDate <= currentDate;
    });

    return oneWeekOrders;
}



export { StartFunc };

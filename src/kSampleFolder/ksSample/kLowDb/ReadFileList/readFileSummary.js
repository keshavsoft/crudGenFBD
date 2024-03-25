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
        element.todayFirstQr = 0;
        element.todayCount = 0;
        element.todaylastQr = 0;
        element.TotalCount = element.value.length;


        if (element.value.length > 0) {
            let LastOrdeDate = element.value[element.value.length - 1];
            element.firstOrder = element.value[0];
            element.lastOrder = LastOrdeDate;
        };

        let LocalTodayData = LocalDateAndTime({ inData: element.value });
        if (LocalTodayData.length > 0) {
            let TodayLastOrdeDate = LocalTodayData[LocalTodayData.length - 1];
            element.todayFirstQr = LocalTodayData[0];
            element.todaylastQr = TodayLastOrdeDate;
            let LocalTodayCount = LocalTodayData.length;
            element.todayCount = LocalTodayCount;
        };
        delete element.value;
        LocalPushData.push(element)
    });
    return LocalPushData;
};

const LocalDateAndTime = ({ inData }) => {
    const Localdate = inData;

    const today = new Date(); // Get today's date
    const todayDate = today.toISOString().split('T')[0]; // Extract today's date portion

    return Localdate.filter(obj => {
        const objDate = new Date(obj.DateTime).toISOString().split('T')[0]; // Extract date portion of object's timestamp
        return objDate === todayDate; // Compare with today's date
    });
};


export { StartFunc };

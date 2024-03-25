import fs from "fs";
import _ from "lodash";
let localpathname = "./KData/JSON/318/QrCodes/Generate.json"

let jsonread = JSON.parse(fs.readFileSync(localpathname));

// const result = Object.groupBy(jsonread, ({ ItemSerial }) => ItemSerial);
// console.log(Array.reduce);


const groupBy1 = (key) => jsonread.sort((a, b) => a[key].localeCompare(b[key])).reduce((total, currentValue) => {
    const newTotal = total;
    if (
        total.length &&
        total[total.length - 1][key] === currentValue[key]
    )
        newTotal[total.length - 1] = {
            ...total[total.length - 1],
            ...currentValue,
            Value: parseInt(total[total.length - 1].Value) + parseInt(currentValue.Value),
        };
    else newTotal[total.length] = currentValue;
    return newTotal;
}, []);

function groupBy(key, array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var added = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j][key] == array[i][key]) {
                result[j].items.push(array[i]);
                added = true;
                break;
            }
        }
        if (!added) {
            var entry = { items: [] };
            entry[key] = array[i][key];
            entry.items.push(array[i]);
            result.push(entry);
        }
    }
    // console.log("result:",result);
    return result;
}

let LocalKey = "BookingData.OrderData.BranchName"
let LocalGroupBy = _.groupBy(jsonread, (inRow) => {
    return inRow.BookingData.OrderData.BranchName

});
console.log("LocalGroupBy:",LocalGroupBy);
// console.log("result", groupBy(LocalKey, jsonread));

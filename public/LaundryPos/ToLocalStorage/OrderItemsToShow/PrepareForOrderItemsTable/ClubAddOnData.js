import { StartFunc as StartFuncFromAddOnsAll } from "../../../FromLocalStorage/AddOnData/Bulk.js";

let StartFunc = ({ inItemData }) => {
    Object.entries(inItemData).forEach(
        ([key, value]) => {
            value.TotalOriginal = value.Rate * value.Pcs;
            value.TotalAfterDiscount = value.TotalOriginal * ((100 - value.DisPer) / 100);
            value.TotalBeforeRounded = value.TotalAfterDiscount + jFLocalConsiderAddOnData({ inItemSerial: value.ItemSerial });
            value.Total = Number(value.TotalBeforeRounded.toFixed(2));
        }
    );
};

let jFLocalConsiderAddOnData = ({ inItemSerial }) => {
    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    let jVarLocalFilered = jFLocalFilterData({
        inData: jVarLocalAddOnData,
        inItemSerial
    });

    if (jVarLocalFilered.length > 0) {
        let jVarLocalAddOnRateArray = jVarLocalFilered.map(element => {
            return element.AddOnRate;
        });

        const sum = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);

        return sum;
    };

    return 0;
};

let jFLocalFilterData = ({ inData, inItemSerial }) => {
    let jVarLocaljVarLocalItemsInOrderJson = inData;

    let jVarLocalAddOnArray = Object.keys(jVarLocaljVarLocalItemsInOrderJson).map(
        key => {
            return {
                RowPk: key,
                ...jVarLocaljVarLocalItemsInOrderJson[key]
            };
        }
    );

    let jVarLocalFilered = jVarLocalAddOnArray.filter(element => {
        return element.AddOnItemSerial === inItemSerial;
    });

    return jVarLocalFilered;
};

export { StartFunc };
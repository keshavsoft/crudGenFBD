import CommonKeys from "../../ToLocalStorage/Keys.json" assert { type: "json" };


const StartFunc = ({ inBranchName }) => {

    let jVarLocalBranchName = inBranchName;

    let jVarLocalStorageKey = CommonKeys.OrdersData;
    let jVarLocalDataNeeded = {};

    if (jVarLocalStorageKey in localStorage) {
        let jVarLocalCustomerData = localStorage.getItem(jVarLocalStorageKey);
        let jVarLocalCustomerDataAsJson = JSON.parse(jVarLocalCustomerData);

        jVarLocalDataNeeded = jVarLocalCustomerDataAsJson;
    };

    // if (jVarLocalBranchName in jVarLocalDataNeeded.OrderData) {
    //     return jVarLocalDataNeeded[jVarLocalBranchName];
    // };

    return jVarLocalDataNeeded;
};

export { StartFunc };
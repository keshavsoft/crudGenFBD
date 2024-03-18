import fs from "fs";

import { StartFunc as StartFuncReturnDbObject } from "./CommonFuncs/ReturnDbObject.js";

let StartFunc = ({ inUsername, inPassword }) => {

    let LocalUsername = inUsername;
    let LocalPassword = inPassword;

    let LocalReturnData = { KTF: false }

    let LocalFromLowDb = StartFuncReturnDbObject();
    LocalFromLowDb.read();

    if (LocalFromLowDb.data.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };
    let LocalFindData= LocalFromLowDb.data.find(e=>e.UserName==LocalUsername && e.Password==LocalPassword)
    
    console.log("LocalData:",LocalFindData);
    
    if (LocalFindData=== undefined) {
        return LocalReturnData      
    }
   
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFromLowDb.data;

    return LocalReturnData;
};

export { StartFunc };

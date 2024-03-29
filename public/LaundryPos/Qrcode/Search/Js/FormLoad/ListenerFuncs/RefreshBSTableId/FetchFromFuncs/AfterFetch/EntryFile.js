import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

let StartFunc = ({ inDataToShow }) => {
    if (inDataToShow.KTF === false) {

    } else {
        StartFuncShowOnDom({ inDataToShow });
    }

};

export { StartFunc }
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

let StartFunc = ({ inDataToShow }) => {
    if (inDataToShow.KTF === false) {
        // swal.fire({
        //     icon: "error",
        //     title: `${inDataToShow.KReason}`
        // });
    } else {
        StartFuncShowOnDom({ inDataToShow });
    }

};

export { StartFunc }
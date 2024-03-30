import { StartFunc as StartFuncNavMenu } from "../../NavMenu/Entry.js";

let StartFunc = ({ inEvent }) => {
    if (inEvent.keyCode === 13) {
        StartFuncNavMenu();
    };
};

export { StartFunc };
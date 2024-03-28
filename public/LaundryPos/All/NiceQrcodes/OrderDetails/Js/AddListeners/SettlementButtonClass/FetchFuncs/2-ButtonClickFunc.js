import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";

let StartFunc = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    if (StartFuncCheckBeforeFetch()) {
        let jVarLocalBodyData = StartFuncPreparePostData({ jVarLocalCurrentTarget });

        StartFuncFetchFunc({
            inBodyData: jVarLocalBodyData
        }).then(ResponseData => {

        });

    };
};


export { StartFunc };
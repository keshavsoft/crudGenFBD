import { StartFunc as StartFuncPresentOrder } from "./PresentOrder/GetFetch.js";

let StartFunc = () => {
    StartFuncPresentOrder().then();
};

export { StartFunc }
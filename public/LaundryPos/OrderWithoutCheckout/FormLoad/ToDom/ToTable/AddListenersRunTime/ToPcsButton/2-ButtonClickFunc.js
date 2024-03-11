import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";

let StartFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalitemserial = jVarLocalCurrentTarget.dataset.itemserial;

    jFLocalSwal({
        inItemSerial: jVarLocalitemserial,
        inPcs: jVarLocalCurrentTarget.value
    });
};

const jFLocalSwal = ({ inItemSerial, inPcs }) => {
    Swal.fire({
        title: `${inItemSerial} : Change Pcs`,
        input: 'number',
        inputAttributes: {
            min:1,
            maX:100
        },
        inputValue: inPcs,
        showCancelButton: true,
        confirmButtonText: 'Save Pcs',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            let jVarLocalPreparePostData = StartFuncPreparePostData({ inPcs: result.value, inItemSerial });

            let response = StartFuncFetchFunc({ inPreparePostData: jVarLocalPreparePostData }).then(PromiseData => {

                if (Object.values(PromiseData).length > 0) {
                    window.location.href = "";
                }
            });

        }
    });
};

export { StartFunc };
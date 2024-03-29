let StartFunc = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalReferncePk = getUrlQueryParams({ inGetKey: "QrCodeId" });

    if (jVarLocalBranchName === "" || jVarLocalBranchName === null) swal.fire({ icon: "error", text: "No Branch on Params" });
    if (jVarLocalReferncePk === "" || jVarLocalReferncePk === null) {
        Swal.fire({
            title: "Enter your Qrcode",
            input: "text",
            inputValidator: (value) => {
                if (value) {
                    let jVarLocalInputPkId = value.trim();
                    let jVarLocalEval = "{{KS}}.split(\"~\")[0].search(\"-\") === -1 ? {{KS}}.split(\"~\")[0] : {{KS}}.split(\"~\")[0].split(\"-\")[1]";
                    let jVarLocalId = eval(jVarLocalEval.replaceAll("{{KS}}", `"${jVarLocalInputPkId}"`));

                    const url = new URL(window.location.href);
                    url.searchParams.append('QrCodeId', jVarLocalId);
                    window.location.href = url;
                }
            }
        });


    }
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }
// import ApiConfigJson from "./../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inFromFetch, inBodyData }) => {
    console.log("inFromFetch:",inFromFetch);
    console.log("length:",inFromFetch.length);
    if (inFromFetch > 0) {
        let jVarLocalOrderNumber = inFromFetch;
        jFLocalToURL({ inOrderNumber: jVarLocalOrderNumber, inBodyData });
    } else {
        Swal.fire({
            icon: 'error',
            title: `Reason`,
            text: `${JSON.stringify(inFromFetch.ServerSideCheck)}`
        })
    };
};
let jFLocalToURL = ({ inOrderNumber, inBodyData }) => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../OrderWithoutCheckout/OrderWithoutCheckout.html", url);
    params1.append("OrderNumber", inOrderNumber);

    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};





export { StartFunc };
let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch) {
        Swal.fire({
            title: 'Settlement Success',
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                jFLocalToURL();
            }
        });
    };
};

let jFLocalToURL = () => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    const k1 = new URL("../../../../../LaundryPos/Orders/QrCodesTable/QrCodesTable.html", myUrlWithParams.href);
    window.location.href = k1.href;
};

export { StartFunc };
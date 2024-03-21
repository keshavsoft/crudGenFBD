let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch) {
        Swal.fire({
            title: 'Add-On Added',
            confirmButtonText: 'Ok',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                jFLocalToURL();
            }
        });
    };
};

let jFLocalToURL = () => {
    window.location.href = "";
};

export { StartFunc };
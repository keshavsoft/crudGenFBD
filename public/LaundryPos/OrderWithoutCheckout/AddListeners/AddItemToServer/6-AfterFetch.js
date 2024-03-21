let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch) {
        Swal.fire({
            title: 'New Item Added',
            confirmButtonText: 'Ok',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                jFLocalToURL({ inOrderNumber: 16 });
            }
        });
    };
};

let jFLocalToURL = ({ inOrderNumber }) => {
    window.location.href = "";
};

export { StartFunc };
const StartFunc = ({ inFromFetch }) => {
    if (inFromFetch) {
        Swal.fire({
            icon: "success",
            title: "Deleted sucesufully",
            confirmButtonText: "ok",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.href = ""

            }
        });


    };
};


export { StartFunc };
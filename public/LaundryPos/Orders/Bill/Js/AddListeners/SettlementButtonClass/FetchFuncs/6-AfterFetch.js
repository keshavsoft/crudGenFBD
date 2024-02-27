let StartFunc = async ({ inFromFetch }) => {
    console.log('inFromFetch::',inFromFetch);
    if (inFromFetch.KTF === false) {
        Swal.fire({
            icon: 'warning',
            title: 'Raised',
            text: inFromFetch.KReason
        });
    } else {
    };

};

export { StartFunc };
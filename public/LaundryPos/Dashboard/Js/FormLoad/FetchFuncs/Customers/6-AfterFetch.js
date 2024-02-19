let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    if (data) {
        localStorage.setItem("Customers", JSON.stringify(data));
    };
};

export { StartFunc };
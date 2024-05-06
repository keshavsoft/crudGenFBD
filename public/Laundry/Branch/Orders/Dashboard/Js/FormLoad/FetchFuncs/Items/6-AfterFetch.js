let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    let LocalData = data.forEach(element => {
        element.pk = element.UuId
        return element;
    });
    if (data) {
        localStorage.setItem("Items", JSON.stringify(data));
    };
};

export { StartFunc };
let StartFunc = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.SentInterVal = "";

        if ((element.todayFirstOrder === "") === false) {
            element.SentInterVal = jFLocalKInterval({ inCurrentdateandtime: element.DateTime });
            
            return element;
        };
        return element;
    });
    return jVarLocalReturnArray;
};

let jFLocalKInterval = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === undefined) {
        return "";
    }
    var diffMs = (new Date() - new Date(inCurrentdateandtime)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";
};

export { StartFunc }
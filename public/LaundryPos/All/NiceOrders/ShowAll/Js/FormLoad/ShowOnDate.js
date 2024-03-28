let StartFunc = () => {
    jFShowsevenDaysAgoDateTime();
    jFLocalCurrentDateTimeToday();
};

const jFShowsevenDaysAgoDateTime = () => {
    var sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    var formattedSevenDaysAgo = sevenDaysAgo.getFullYear() + '-' + ((sevenDaysAgo.getMonth() + 1) < 10 ? '0' : '') + (sevenDaysAgo.getMonth() + 1) + '-' + (sevenDaysAgo.getDate() < 10 ? '0' : '') + sevenDaysAgo.getDate();

    document.getElementById('startDateId').value = formattedSevenDaysAgo;
};


let jFLocalCurrentDateTimeToday = () => {
    var today = new Date();
    var formattedDate = today.getFullYear() + '-' + ((today.getMonth() + 1) < 10 ? '0' : '') + (today.getMonth() + 1) + '-' + (today.getDate() < 10 ? '0' : '') + today.getDate();
    document.getElementById('endDateId').value = formattedDate;
};



export { StartFunc }
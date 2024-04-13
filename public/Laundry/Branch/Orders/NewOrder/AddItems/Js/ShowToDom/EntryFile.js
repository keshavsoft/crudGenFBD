import { StartFunc as StartFuncToTable } from "./ToTable/EntryFile.js";

const StartFunc = () => {
    StartFuncToTable();
    jFdate();
};

const jFdate = () => {

    var sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    var formattedSevenDaysAgo = sevenDaysAgo.getFullYear() + '-' + ((sevenDaysAgo.getMonth() + 1) < 10 ? '0' : '') + (sevenDaysAgo.getMonth() + 1) + '-' + (sevenDaysAgo.getDate() < 10 ? '0' : '') + sevenDaysAgo.getDate();

    document.getElementById('TableFooterdateInputId').value = formattedSevenDaysAgo;

}

export { StartFunc }
let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    const k1 = new URL("../ShowWithInfo/ShowWithInfo.html", myUrlWithParams.href);
    k1.searchParams.append("BranchName", jVarLocalBranchName);

    window.location.href = k1.href;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };


let StartFunc1 = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../../ShowWithInfo/ShowWithInfo.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

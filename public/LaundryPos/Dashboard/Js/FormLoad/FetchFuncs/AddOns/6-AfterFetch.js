const StartFunc = ({ inFromFetch }) => {
  let data = inFromFetch;

  if (data) {
    localStorage.setItem("AddOns", JSON.stringify(data));
  };
};

export { StartFunc };
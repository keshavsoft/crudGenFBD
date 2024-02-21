let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    createTable({data});
    console.log(data)
    if (data) {
        localStorage.setItem("Customers", JSON.stringify(data));
    };
};
function createTable({data}) {
    // Create a table element
    let table = document.createElement('table');
    let localDivId=document.getElementById("tableId");
  
    // Create table header
    let headerRow = table.insertRow();
    for (let key in data[0]) {
      let th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    }
  
    // Create table rows and cells
    for (let obj of data) {
      let row = table.insertRow();
      for (let key in obj) {
        let cell = row.insertCell();
        cell.textContent = obj[key];
      }
    }
  
    // Append the table to the document
    document.body.appendChild(table);
    localDivId.appendChild(table)
  }
  
  // Call the function with your data array

  




export { StartFunc };
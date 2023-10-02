function calculateReimbursement() {
    let tripStart = parseFloat(document.getElementById('tripStart').value);
    let tripEnd = parseFloat(document.getElementById('tripEnd').value);
    let tripReimbursed = parseFloat(document.getElementById('tripReimbursed').value);
    
    let distance = tripEnd - tripStart;

    let mileage = distance * tripReimbursed;

    document.getElementById('outputDiv').innerHTML = mileage;
    // console.log(mileage)
}; 

console.log(mileage)
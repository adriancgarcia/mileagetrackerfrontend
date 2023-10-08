<script>
  // let count = 0
  // const increment = () => {
  //   count += 1
  // }

  function calculate() {
    let tripStart = parseFloat(document.getElementById('tripStart').value);
    let tripEnd = parseFloat(document.getElementById('tripEnd').value);
    let tripReimbursed = parseFloat(document.getElementById('tripReimbursed').value);
    
    let distance = tripEnd - tripStart;

    let mileage = distance * tripReimbursed;

    document.getElementById('outputDiv').innerHTML = mileage;
    // console.log(mileage)
}; 


</script>

<!-- <button on:click={increment}>
  count is {count}
</button> -->

Trip Name: <input type="text" id="tripname" placeholder="Trip Name">
Date of Trip <input type="Date" id="tripdate" placeholder="Date of Trip">
Trip beginning: <input type="text" id="tripStart" placeholder="Beginning Mileage">
Trip End: <input type="text" id="tripEnd" placeholder="End Mileage">
cost per mile <input type="text" id="tripReimbursed" placeholder="Cost Per Mile">
<button type="button" on:click={calculate}>Calculate Amount</button>
<br>
Amount Reimbursed<div id="outputDiv"></div>

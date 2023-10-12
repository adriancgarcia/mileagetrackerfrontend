<script>
  
    // import TripList from './TripList.svelte'
  
    function calculate() {
      let startmileage = parseFloat(document.getElementById('startmileage').value);
      let endmileage = parseFloat(document.getElementById('endmileage').value);
      let costpermile = parseFloat(document.getElementById('costpermile').value);
      
      let distance = endmileage - startmileage;
      let mileage = distance * costpermile;
  
      document.getElementById('outputDiv').innerHTML = mileage;
      // console.log(mileage)
  }; 

  const formValues = {
    tripname: '',
    tripdate: '',
    startmileage: '',
    endmileage: '',
    costpermile: ''
  } 

  function submitForm(event) {
    console.log(formValues)
  }
</script>

<main>
  <div>
    <pre>
      {JSON.stringify(formValues, null, 5)}
    </pre>
  </div>
  <form on:submit|preventDefault={submitForm}>
    <div>
      <label for="tripname">Trip Name</label>
      <input type="text" id="tripname" bind:value={formValues.tripname} placeholder="Trip Name">
    </div>
    <div> 
      <label for="tripdate">Date of Trip</label>
      <input type="Date" id="tripdate" bind:value={formValues.tripdate} placeholder="Date of Trip">
    </div> 
    <div>
      <label for="startmileage">Trip Beginning</label>
      <input type="number" id="startmileage" bind:value={formValues.startmileage} placeholder="Beginning Mileage">
    </div>
    <div>
      <label for="endmileage">Trip End</label>
      <input type="number" id="endmileage" bind:value={formValues.endmileage} placeholder="End Mileage">
    </div>
    <div>
      <label for="costPerMile">Cost Per Mile</label>
      <input type="text" id="costpermile"  bind:value={formValues.costpermile} placeholder="Cost Per Mile">
    </div>
    <div>
      <button type="button" on:click={calculate}>Calculate Amount</button>
    </div>
      <br>
    <div>
      Amount Reimbursed<div id="outputDiv"></div>
    </div>
    <div>
      <button>Create New Trip</button>
    </div>
  </form>  
</main>


<style>
  form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    
    input{
        width: 100%;
        border-radius: 6px;
        text-align: left;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    #outputDiv {
    width: 40%;
    height: 10px;
    margin: 0 auto;
    text-align: center;
    padding: 5px 0 20px 0;
    font-size: 16px;
    color: black;
    border: 1px solid black;
  }
  button{
    margin: 20px
  }
</style>
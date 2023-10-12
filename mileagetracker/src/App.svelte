<script>
  // import svelteLogo from './assets/svelte.svg'
  // import viteLogo from '/vite.svg'
  // import Counter from './lib/Counter.svelte'
  import Header from './components/Header.svelte';
  import Calculate from './components/Calculate.svelte';
  import TripList from './components/TripList.svelte';
  


  // let fields = { tripName: '', tripdate: '', tripStart: '', tripEnd: '', costpermile: '', tripReimbursed: '' };
  // let errors = {tripName: '', tripdate: '', tripStart: '', tripEnd: '', costpermile: '', tripReimbursed: '' };
  // let valid = false;

  // let trips = '';
  // let src = '';

// async function getTrips() {
//   let allTrips = trips;
//   let res = await fetch(`src=${trips}`);
//   let trips_made = await res.text();
//   if(res.ok && allTrips == trips) {
//     src = trips_made;
//   }
//   console.log(src)
// }

// function calculate() {
//       let tripStart = parseFloat(document.getElementById('tripStart').value);
//       let tripEnd = parseFloat(document.getElementById('tripEnd').value);
//       let tripReimbursed = parseFloat(document.getElementById('tripReimbursed').value);
      
//       let distance = tripEnd - tripStart;
  
//       let mileage = distance * tripReimbursed;
      
//       document.getElementById('outputDiv').innerHTML = mileage;
//       // console.log(mileage)
//   }; 

  // const submitHandler = () => {
  //       // console.log(fields)
  //       valid = true;

  //        //   validate tripname
  //        if(fields.tripname.trim().length < 0) {
  //           valid = false;
  //           errors.tripname = "tripname cannot be left empty.";
  //       } else {
  //           errors.tripname = '';
  //       }

  //       //   validate tripdate
  //       if(fields.tripdate.trim().length < 0) {
  //           valid = false;
  //           errors.tripdate = "tripdate cannot be left empty.";
  //       } else {
  //           errors.tripdate = '';
  //       }

  //       //   validate tripStart
  //       if(fields.tripStart.trim().length < 0) {
  //           valid = false;
  //           errors.tripStart = "tripStart cannot be left empty.";
  //       } else {
  //           errors.tripStart = '';
  //       }

  //       //   validate tripEnd
  //       if(fields.tripEnd.trim().length < 0) {
  //           valid = false;
  //           errors.tripEnd = "tripEnd cannot be left empty.";
  //       } else {
  //           errors.tripEnd = '';
  //       }

  //       //   validate tripReimbursed
  //       if(fields.tripReimbursed.trim().length < 0) {
  //           valid = false;
  //           errors.tripReimbursed = "tripReimbursed cannot be left empty.";
  //       } else {
  //           errors.tripReimbursed = '';
  //       }

  //       // Add new Trip 
  //       if (valid) {
  //           let trip = {...fields}
  //           console.log('valid', fields)
  //       }
  // }
</script>

<Header />

<main>
  <h2>TRIPS MADE</h2>
  <TripList />

  <div class = "form">
    <Calculate />
  </div>
  

  <!-- <form>
    <div class="form-field">
      <label for="tripname">Trip Name</label>
      <input type="text" id="tripname" placeholder="Trip Name">
    </div>
    <div class="form-field">
      <label for="tripdate">Date of Trip</label>
      <input type="Date" id="tripdate" placeholder="Date of Trip">
    </div>
    <div class="form-field">
      <label for="tripStart">Trip Beginning</label>
      <input type="number" id="tripStart" placeholder="Beginning Mileage">
    </div>
      <div class="form-field">
      <label for="tripEnd">Trip End</label>
      <input type="number" id="tripEnd" placeholder="End Mileage">
    </div>  
    <div class="form-field">
      <label for="costPerMile">Cost Per Mile</label>
      <input type="text" id="costpermile"  placeholder="Cost Per Mile">
    </div>  
      <Button type="button" on:click={calculate}>Calculate Amount</Button>
    <br>
    Amount Reimbursed<div id="outputDiv"></div>
</form> -->

  <!-- <h1>Mileage Tracker</h1>
  <h1>Trips: </h1>
  <h2>{src}.map</h2> -->
  <!-- <input type="text" placeholder="Trip Name" bind:value={trips}/> -->
  <!-- <button on:click={trips}>See All Trips</button> -->

</main>

<style>
  /* form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field{
        margin: 18px auto;
    } 
    input{
        width: 100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    } */
</style>

<script>
    import { onMount } from 'svelte'

    let trips = []
    
    onMount(async () => {
        const response = await fetch('http://localhost:3000/trips')
        trips = await response.json()
        console.log(trips)
    })
</script>

{#each trips as trip (trip.id)}
<!-- <h3>{trip.id}.</h3>  -->
    <h3>{trip.tripname}</h3>
    <h2>{trip.tripdate}</h2>
    <h2>{trip.startmileage}</h2>
    <h2>{trip.endmileage} </h2>
    <h2>{trip.costpermile}</h2>
{/each}

<!-- <button on:click={trips}>See All Trips</button> -->




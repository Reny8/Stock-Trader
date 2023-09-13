<template>
<div>
    <h1>Trade or View your Portfolio</h1>
    <p>You may Save &amp; Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr/>
    <h3>Your Funds: ${{ funds }}</h3>
</div>
</template>
<script>
import numeral from 'numeral';
export default {
    name: "HomePage",
    computed: {
        funds() {
            return numeral(this.$store.state.funds).format('0,0');
        },
    },
}
</script>
<style scoped>
div {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: solid 1px #7d7d7d;
    padding: 2rem 1.5rem;
    border-radius: 2px
}
hr {
    width: 100%;
    margin-top: 1.5rem;
}
h1, p {
    margin-block-start: 0.4rem;
    margin-block-end: 0.4rem
}
h3 {
    margin-block-end: 0.4rem
}
</style>
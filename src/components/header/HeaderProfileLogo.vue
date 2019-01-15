<template>
  <div>
    <img src="./assets/profileLogo.png">
    <h3> Mon profile</h3>
  </div>
</template>

<script>
  export default {
    name: 'HeaderProfileLogo',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width : 40px;
  }
  h3 {
    font-weight:  bold;
    font-size: 13px;
    font-style: italic;
  }
  div {
    text-align: center;
  }

</style>

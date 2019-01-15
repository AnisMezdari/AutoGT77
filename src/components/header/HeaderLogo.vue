<template>
  <div>
    <div class = "row">
      <img class ="logoHeader" src="./assets/logo.png" alt = "image logo">
      <a href="#">
        <img class = "logoSocialNetwork" src="./assets/facebook.svg" alt = "facebook icon">
      </a>
      <a href="#">
        <img class = "logoSocialNetwork" src="./assets/twitter.png" alt = "twitter icon">
      </a>
      <a href="#">
        <img class = "logoSocialNetwork" src="./assets/instagram.png" alt = "instagram icon">
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'HeaderLogo',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logoHeader {
    width: 170px;
    /* border-bottom: 4px solid #000000; */
    margin-right : 30px;
  }
  h3 {
    font-weight:  bold;
    font-size: 19px;
  }
  div{
    padding-top : 20px;
    padding-bottom:  20px;
  }

  .logoSocialNetwork{
    height  : 22px;
    margin-top: 30px;
    margin-left : 30px;
  }

</style>

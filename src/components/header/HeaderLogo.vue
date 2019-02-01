<template>

  <div class = "row">
    <div class="col-xl-3 col-lg-12 containerLogo">
      <img class ="logoHeader" src="./assets/logo.png" alt = "image logo">
    </div>

    <div class="col-xl-3  col-lg-12 col-sm-12  containerLogoSocialNetwork">
      <a href="#">
        <img class = "logoSocialNetwork " src="./assets/facebook.png" >
      </a>
      <a href="#">
        <img class = "logoSocialNetwork" src="./assets/twitter.png" >
      </a>
      <a href="#">
        <img class = "logoSocialNetwork" src="./assets/instagram.png" >
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
    width: 100%;
    max-width: 200px;
    /* border-bottom: 4px solid #000000; */

  }

  .logoHeader:hover  {
    opacity: 0.5;
  }

  .logoSocialNetwork:hover {
    opacity: 0.5;
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
    margin-right: 15px;
  }
  .containerLogoSocialNetwork{
    text-align: center;
  }
  .containerLogo{
    text-align: center;
  }
</style>

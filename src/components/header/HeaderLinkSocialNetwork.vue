<template>
  <div class="containerLogoSocialNetwork">
    <a href="#">
      <img class = "logoSocialNetwork " src="./assets/facebook.svg" alt = "facebook icon">
    </a>
    <a href="#">
      <img class = "logoSocialNetwork" src="./assets/twitter.png" alt = "twitter icon">
    </a>
    <a href="#">
      <img class = "logoSocialNetwork" src="./assets/instagram.png" alt = "instagram icon">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'HeaderLinkSocialNetwork',
    props:[],
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .containerLogoSocialNetwork{
    padding-top: 60px;
  }
  .logoSocialNetwork{
    height  : 22px;
    margin-right: 15px;
  }

  .logoSocialNetwork:hover {
    opacity: 0.5;
  }
</style>

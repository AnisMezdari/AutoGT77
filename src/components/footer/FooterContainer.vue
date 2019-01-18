<template>
  <div class = "containerFooter">
    <div class="sousContainer">
    </div>
    <div class=" footerContainerText row">
        <div class="col-8">
          © Copyright 2018 - AutoGT77 Vehicule sell - Website By HomerTimes (https://homertimes.fr)
        </div>
        <div class="">
          <a href ="#"> Privacy Policy / Terms of Use </a>
        </div>
    </div>

    <div class=" footerContainerText row">
      <a class = "col-8" href="#">Nous contacter</a>
    </div>
    <div class=" footerContainerText row">
      <a  class = "col-8" href="#">Contacter le développeur du site web</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterContainer',
    components: {

   },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.containerFooter{
  margin-top: 30px;
  height : 200px;
  background-color: #283D51;
}
.sousContainer{
  width : 100%;
  height : 30px;
  background-color : #22313F
}

.footerContainerText{
  width : 100%;
  color : white;
  font-family: Arial;
  text-decoration: none;
  margin : auto;
  width: 80%;
  font-size: 13px;
  margin-top: 15px;
}
</style>

<template>
  <div class = "containerFooter">
    <div class="sousContainer">
    </div>
    <div class=" footerContainerCopyrightText footerContainerText row">
        <div class="col-10">
          © Copyright 2018 - AutoGT77 Vehicule sell - Website By HomerTimes (https://homertimes.fr)
        </div>
        <div class="">
          <a   class = "col-8 linkFooter" href ="@/./assets/bosonv2.apk" download> Privacy Policy / Terms of Use </a>
        </div>
    </div>

    <div class=" footerContainerText row">
      <a class = "col-8 linkFooter" href="/#/contact">Nous contacter</a>
    </div>
    <div class=" footerContainerText row">
      <a  class = "col-8 linkFooter" href="#">Contacter le développeur du site web</a>
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
  width : 70%;
  color : white;
  font-family: Arial;

  margin : auto;
  font-size: 13px;
}
.linkFooter{
    text-decoration: none;
    color : white;
    margin-top: 5px;
}
.linkFooter:hover{
  color : #22313F;
}
.footerContainerCopyrightText{
  margin-bottom : 15px;
  margin-top : 10px;
}
</style>

<template>
  <a :href="linkId">
      <div class="containerCar">
        <img  class ="contructorImg animated 1 bounceIn delay-0s"
              :src="require(`./assets/${carImage}`)"
              :alt = "carName"/>

        <div class="carText">
          <h2>{{carName}}</h2>
          <h3>{{price}} / {{kilometer}} / {{years}} </h3>
        </div>
      </div>
  </a>

</template>

<script>
    export default {
      name: 'Car',
      props:["carImage","carName","price","kilometer","years","linkId"],
      components: {

     },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.containerCar{
  margin-bottom : 50px
}
.contructorImg{
  width : 400px;
}

.carText{

  color : #22313F;
  margin-top: 10px;
}
h2 {
    font-family: Impact;
  font-size: 20px;
}

h3 {
  font-style: italic;
  font-size: 18px;
}
</style>

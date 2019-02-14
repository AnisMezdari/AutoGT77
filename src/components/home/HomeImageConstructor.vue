<template>
  <a :href="'/#/cars/' + linkMarque">
    <div>
        <img  class ="contructorImg animated 1 bounceIn delay-0s" :src="require(`./assets/${constructorImage}`)" :alt = "constructorName"/>
      <p class = "constructorName animated 1 bounceIn delay-0s">{{constructorName}}</p>
    </div>
  </a>

</template>


<script>
require('vue2-animate/dist/vue2-animate.min.css')
    export default {
      name: 'HomeImageConstructor',
        props:["constructorImage","constructorName", "linkMarque"],
      components: {
     },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  text-align: center;
  padding-top: 50px;
  padding-bottom : 30px;
}
div:hover{
  opacity: 0.5;
}
.contructorImg{
  width : 150px;
}

p {
  font-style: italic;
  font-family: Impact;
  color : #22313F;
}

</style>

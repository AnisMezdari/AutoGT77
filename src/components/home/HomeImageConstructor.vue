<template>
  <div>
      <img  class ="contructorImg" :src="require(`./assets/${constructorImage}`)" :alt = "constructorName"/>
      <p class = "constructorName">{{constructorName}}</p>
  </div>
</template>


<script>

    export default {
      name: 'HomeImageConstructor',
        props:["constructorImage","constructorName"],
      components: {
     },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  text-align: center;
  padding-top: 40px;
}
div:hover{
  opacity: 0.5;
}
.contrusctorName{

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

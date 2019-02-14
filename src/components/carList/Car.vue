<template>
  <a :href="linkId">
      <div class="containerCar">
        <img  class ="contructorImg animated 1 fadeIn delay-0s"
              :src="carImage"
              :alt = "carName"/>

        <div class="carText">
          <h2>{{carName}}</h2>
            <h3>{{addSpaceToLongNumber(price,"€")}}/ {{addSpaceToLongNumber(kilometer,"km")}} / {{years}} </h3>
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
     methods : {
       addSpaceToLongNumber : function (price, endString) {
         if(price == null){
           return ""
         }
         return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + endString ;
       }
     }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.containerCar:hover{
  opacity: 0.5;
}
.contructorImg{
  width : 100%;
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

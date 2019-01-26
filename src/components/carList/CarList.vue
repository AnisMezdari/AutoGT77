<template>
  <div class="containerCarList">
    <div class="containerConstructorText row">
      <h2> {{marqueTitle}} </h2>
    </div>
    <div  class="sousContainerCarList row">
        <div  v-for="car in cars"  v-if = "marqueTitle == car.marque" class="col-4">
            <car :carImage = "car.images[0]"
                 :carName = "car.title"
                 :price = "car.price"
                 :kilometer = "car.kilometer"
                 :years = "car.year"
                 :linkId = "'#/car/' + car._id">

            </car>
        </div>
    </div>
  </div>
</template>

<script>
import car from '@/components/carList/Car'
    export default {
      name: 'CarList',
      props:["carImage","carName"],
      components: {
        car
     },
     data() {
       return {
         cars : '',
         marqueLink : '',
         carToMarque : '',
         marqueTitle : ''
       }
     },
     methods : {
       increment: function (index) {
           index+1
        },
      },
     created(){
        console.log(this.$route.params.id)

       this.$http.get("http://localhost:4000/cars").then(function(data){
         this.cars = data.body;
       });
       this.$http.get("http://localhost:4000/marques/"+this.$route.params.marque).then(function(data){
         this.marqueTitle = data.body.title;
       });
     }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .containerCarList{
    width : 65%;
    margin : auto;
    margin-top: 30px;
  }

  .containerConstructorText{
    font-style: italic;
    font-family: Impact;
    color : #22313F;
    margin-bottom: 30px;
    border-bottom: 3px solid #22313F;
  }
</style>

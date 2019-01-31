<template>
  <div class="containerCarList">
    <div class="containerConstructorText row">
      <h2> {{marqueTitle}} </h2>
    </div>
    <div  id = "loadDiv" v-bind:style= "{display : computedDisplay}" class="col-xl-4 col-lg-6 ol-md-6 col-sm-12">
      <div   class="sousContainerCarList row"  >
        <div  v-for="initCar in initCars"  class="col-4">
            <car :carImage = "require(`./assets/defautCar.png`)"
                  carName = "Car title"
                  price = "1€"
                  kilometer = "1 Km"
                  years  = "2000"
              >
            </car>
        </div>
    </div>
    </div>


    <div  class="sousContainerCarList row">
        <div  v-for="car in cars"  v-if = "marqueTitle == car.marque" class="col-xl-4 col-lg-6 ol-md-6 col-sm-12">
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
         initCars : [],
         marqueLink : '',
         carToMarque : '',
         marqueTitle : 'Title',
         display : "initial"
       }
     },
     methods : {
       increment: function (index) {
           index+1
        },
      },
      computed: {
        computedDisplay: function () {
          return this.display;
        }
      },
     created(){
       this.initCars.length = 10;
       this.$http.get(process.env.API_LOCATION + "cars").then(function(data){
         this.cars = data.body;
         this.display = "none";
       });
       this.$http.get(process.env.API_LOCATION + "marques/"+this.$route.params.marque).then(function(data){
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
    min-height: 80vh;
  }

  .containerConstructorText{
    font-style: italic;
    font-family: Impact;
    color : #22313F;
    margin-bottom: 30px;
    border-bottom: 3px solid #22313F;
  }


</style>

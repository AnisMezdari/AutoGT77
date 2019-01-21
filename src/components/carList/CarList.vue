<template>
  <div class="containerCarList">
    <div class="containerConstructorText row">
      <h2> BMW </h2>
    </div>
    <div class="sousContainerCarList row">
      <div class="col-4">
          <car carImage = "voiture.jpg"
               carName = "BMW serie 3"
               price = "45 000€"
               kilometer = "150 000km"
               years = "2015">
        </car>
      </div>
      <div class="col-4">
        <car carImage = "voiture.jpg"
             carName = "BMW serie 3"
             price = "45 000€"
             kilometer = "150 000km"
             years = "2015">
      </car>
      </div>
      <div class="col-4">
        <car carImage = "voiture.jpg"
             carName = "BMW serie 3"
             price = "45 000€"
             kilometer = "150 000km"
             years = "2015">
      </car>
      </div>
    </div>
    <div class="sousContainerCarList row">
      <div class="col-4">
        <car carImage = "voiture.jpg"
             carName = "BMW serie 3"
             price = "45 000€"
             kilometer = "150 000km"
             years = "2015">
      </car>
      </div>
      <div class="col-4">
        <car carImage = "voiture.jpg"
             carName = "BMW serie 3"
             price = "45 000€"
             kilometer = "150 000km"
             years = "2015">
      </car>
      </div>
      <div class="col-4">
        <car carImage = "voiture.jpg"
             carName = "BMW serie 3"
             price = "45 000€"
             kilometer = "150 000km"
             years = "2015">
      </car>
      </div>
    </div>
    <div class="sousContainerCarList row">
      <div class="col-4">
        <car carImage = "voiture.jpg"
             carName = "BMW serie 3"
             price = "45 000€"
             kilometer = "150 000km"
             years = "2015">
      </car>
      </div>
      <div class="col-4">
        <car carImage = "voiture.jpg"
             carName = "BMW serie 3"
             price = "45 000€"
             kilometer = "150 000km"
             years = "2015">
      </car>
      </div>
      <div class="col-4">
        <car carImage = "voiture.jpg"
             carName = "BMW serie 3"
             price = "45 000€"
             kilometer = "150 000km"
             years = "2015">
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

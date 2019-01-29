<template>
  <div class="containerCarDetailCarrousel">
    <div class="row carDetailTitleCarrousel">
      <h4>{{title}}</h4>
    </div>
    <div class="row carrouselContainer">
      <b-carousel id="carousel1"
                   style="text-shadow: 1px 1px 2px #333;"
                   controls
                   indicators
                   :interval="5000"
       >
         <b-carousel-slide v-for = "carImage in carImages"  :key="carImage.id">
           <img slot="img" class="d-block img-fluid w-100 imgCarrousel"
              :src="carImage" :alt = "title" />

         </b-carousel-slide>
         <!-- Text slides with image -->

       </b-carousel>
    </div>

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
    export default {
      name: 'CarDetailCarrousel',
      props:["carImage","carImageDeux","carImageTrois","carImageQuatre"],
      components: {
     },
     data() {
       return {
         carImages : '',
         title : ''
       }
     },
     created(){
       this.$http.get("http://localhost:4000/cars/"+this.$route.params.id).then(function(data){
        this.title = data.body.title;
        this.carImages = data.body.images;
       });
     }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .carDetailTitleCarrousel{
    font-family: Impact;
    color : #22313F;
    margin-bottom:  15px;
    padding-top:  20px;
  }

  .carrouselContainer{
    margin-top: 60px;
    margin-bottom: 60px;
    width : 1100px ;
    height : 550px;
  }
  .carousel-item{
    width : 1100px !important;
    height : 550px;
  }
  .imgCarrousel{
    width : 100% ;
    height : 100%;
  }
  #carousel1{
    width : 100% ;
    height : 100%;
  }
</style>

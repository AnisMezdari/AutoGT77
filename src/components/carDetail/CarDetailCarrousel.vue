<template>
  <div class="containerCarDetailCarrousel">
    <div class="row carDetailTitleCarrousel">
      <h4>{{title}}</h4>
    </div>
    <div class="carrouselContainer row">
      <b-carousel id="carousel1"
                   style="text-shadow: 1px 1px 2px #333;"
                   controls
                   indicators
                   :interval="5000"
                   class = "col-9"
       >
         <b-carousel-slide v-for = "carImage in carImages"  :key="carImage.id">
           <img slot="img" class="d-block img-fluid w-100 imgCarrousel"
              :src="carImage" :alt = "title" />

         </b-carousel-slide>
         <!-- Text slides with image -->

       </b-carousel>
        <CarDetailFormContact class = "col-3"> </CarDetailFormContact>

    </div>

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import CarDetailFormContact from '@/components/carDetail/CarDetailFormContact'
    export default {
      name: 'CarDetailCarrousel',
      props:["carImage","carImageDeux","carImageTrois","carImageQuatre"],
      components: {
        CarDetailFormContact
     },
     data() {
       return {
         carImages : '',
         title : ''
       }
     },
     created(){
       this.$http.get(process.env.API_LOCATION + "cars/" + this.$route.params.id).then(function(data){
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
  }
  .carousel-item{
    width : 100%;

  }
  .imgCarrousel{
    width : 100% ;

  }
  #carousel1{
    width : 100% ;

  }
</style>

<template>
  <div class="containerCarDetailCarrousel">
    <div class="row carDetailTitleCarrousel">
      <h4>{{title}}</h4>
    </div>
    <div class="col-10 carrouselContainer">
      <b-carousel id="carousel1"
                   style="text-shadow: 1px 1px 2px #333;"
                   controls
                   indicators
                   :interval="5000"
                   img-width="1024"
                   img-height="480"


       >
         <!-- Text slides with image -->
         <b-carousel-slide>
           <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             :src="require(`./assets/${carImage}`)"
             :alt = "title" />
         </b-carousel-slide>

         <!-- Slides with custom text -->
         <b-carousel-slide>
           <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             :src="require(`./assets/${carImageDeux}`)"
             :alt = "title" />
         </b-carousel-slide>

         <!-- Slides with image only -->
         <b-carousel-slide>
           <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             :src="require(`./assets/${carImageTrois}`)"
             :alt = "title" />
         </b-carousel-slide>

         <b-carousel-slide>
           <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             :src="require(`./assets/${carImageQuatre}`)"
             :alt = "title" />
         </b-carousel-slide>
       </b-carousel>
    </div>

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
    export default {
      name: 'CarDetailCarrousel',
      props:["title","carImage","carImageDeux","carImageTrois","carImageQuatre"],
      components: {
     },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .carDetailTitleCarrousel{
    font-family: Impact;
    color : #22313F;
    margin-bottom:  15px;
  }

  .carrouselContainer{
  }
</style>

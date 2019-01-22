<template>
  <div class="containerCarDetail">
    <CarDetailCarrousel class ="contructorImg animated 1 bounceIn delay-0s"
                        carImage = "audia3-1.jpg"
                        carImageDeux = "audia3-2.jpg"
                        carImageTrois= "audia3-3.jpg"
                        carImageQuatre = "audia3-4.jpg"
                        title = "Audi A3 Focus sportive"

    > </CarDetailCarrousel>
    <CarDetailDescription class ="contructorImg animated 1 bounceIn delay-0s"> </CarDetailDescription>
  </div>
</template>

<script>
import CarDetailCarrousel from '@/components/carDetail/CarDetailCarrousel'
import CarDetailDescription from '@/components/carDetail/CarDetailDescription'
    export default {
      name: 'CarDetailContainer',
      props:[],
      components: {
        CarDetailCarrousel,
        CarDetailDescription
     },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .containerCarDetail{
    margin : auto;
    width : 65%;
    margin-top: 15px;
  }
</style>

<template>
  <div class ="HomerContainer">
    <div class ="row">
      <HomeImageConstructor class ="col-4"
                            constructorImage = "bmw.png"
                            constructorName = "Bmw" >
      </HomeImageConstructor>
      <HomeImageConstructor class ="col-4"
                            constructorImage = "audi.png"
                            constructorName = "Audi" >
      </HomeImageConstructor>
      <HomeImageConstructor class ="col-4"
                            constructorImage = "mercedes.png"
                            constructorName = "Mercedes-Benz" >
      </HomeImageConstructor>
    </div>
    <div class ="row">
      <HomeImageConstructor class ="col-4"
                            constructorImage = "fiat.png"
                            constructorName = "Fiat" >
      </HomeImageConstructor>
      <HomeImageConstructor class ="col-4"
                            constructorImage = "renault.png"
                            constructorName = "Renault" >
      </HomeImageConstructor>
      <HomeImageConstructor class ="col-4"
                            constructorImage = "citroen.png"
                            constructorName = "Citroën" >
      </HomeImageConstructor>
    </div>
    <div class ="row">
      <HomeImageConstructor class ="col-4"
                            constructorImage = "peugeot.png"
                            constructorName = "Peugeot" >
      </HomeImageConstructor>
    </div>
  </div>
</template>

<script>
  import HomeImageConstructor from '@/components/home/HomeImageConstructor'

    export default {
      name: 'HomeContainer',
      components: {
       HomeImageConstructor,
     },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.HomerContainer{
  width : 60%;
  margin : auto;

  /* background-color: #FAFAFA; */
}

</style>

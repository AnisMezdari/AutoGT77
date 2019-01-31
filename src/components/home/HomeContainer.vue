<template>
  <div class ="HomerContainer">
    <div class ="row">
      <HomeImageConstructor v-for = "marque in marques" :key = "marque.id" class ="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                            :constructorImage = "marque.image"
                            :constructorName = "marque.title"
                            :linkMarque = "marque._id" >
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
     data() {
       return {
         marques : ''
       }
     },
     created(){

       this.$http.get(process.env.API_LOCATION + "marques").then(function(data){
         this.marques = data.body
         console.log(this.marques)
       });
     }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.HomerContainer{
  width : 60%;
  margin : auto;
  min-height: 80vh;
  /* background-color: #FAFAFA; */
}

</style>
